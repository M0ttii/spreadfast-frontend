import { fail, redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";
import type { PageData } from "../$types";
import type { PageDataProp } from "./types";


export const load: PageServerLoad = async ({ parent, params: { slug } }) => {
    const parentData = await parent();
    const { startups } = parentData;

    const startup = startups?.find((p) => p.id.toString() === slug);

    const transFormedData = transformStartupData(startup);

    return {
        slug: slug,
        form: await superValidate(transFormedData, zod(formSchema)),
    }
}

export const actions: Actions = {
    default: async (event) => {
        console.log("Form submitted init")
        const { locals, params } = event
        const { supabase } = locals
        const { slug } = params
        console.log("PreValidating form", await event.request.formData())
        const form = await superValidate(event, zod(formSchema));
        console.log("Validated form:", form);
        if (!form.valid) {
            console.log("Form not valid", form.errors)
            return fail(400, {
                form,
            });
        }

        const formData = { ...form.data, starting_price: parseFloat(form.data.starting_price) }
        const { data, error } = await supabase.from('startups').update(formData).eq('id', parseInt(slug as string));
        console.log("Form submitted", data, error)

        return {
            form,
        };
    },
};

function transformStartupData(startup: any) {
    return {
        firstname: startup.first_name || '',
        lastname: startup.last_name || '',
        email: startup.email || '',
        role: startup.role || '',
        city: startup.company_city || '',
        country: startup.company_country || '',
        twitter: startup.personal_twitter || '',
        url: startup.url || '',
        affiliate: startup.affiliate || '',
        ctwitter: startup.company_twitter || '',
        pricing_select: startup.pricing_type || '',
        launch_date: startup.launch_date || '',
        starting_price: startup.starting_price?.toString() || '',
        tagline: startup.tagline || '',
        short_description: startup.short_description || '',
        long_description: startup.long_description || '',
        category_select: startup.category || '',
        tags: [], // Sie müssen entscheiden, wie Sie Tags handhaben möchten
        use_case_1: startup.use_case_1 || '',
        use_case_2: startup.use_case_2 || '',
        key_features: [] // Sie müssen entscheiden, wie Sie key_features handhaben möchten
    };
}