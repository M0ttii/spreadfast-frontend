import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";
import type { PageData } from "../$types";
import type { PageDataProp } from "./types";


export const load: PageServerLoad = async ({ parent, params: { slug } }) => {
    const { startups } = await parent();

    const startup = startups?.find((p) => p.id.toString() === slug);

    const transFormedData = transformStartupData(startup);

    return {
        slug: slug,
        form: await superValidate(transFormedData, zod(formSchema)),
    }
}

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
        launch_date: startup.launch_date ? new Date(startup.launch_date) : new Date(),
        starting_price: startup.starting_price?.toString() || '',
        tagline: startup.tagline || '',
        short_description: startup.short_description || '',
        long_description: startup.long_description || '',
        catgeory_select: startup.category || '',
        tags: [], // Sie müssen entscheiden, wie Sie Tags handhaben möchten
        use_case_1: startup.use_case_1 || '',
        use_case_2: startup.use_case_2 || '',
        key_features: [] // Sie müssen entscheiden, wie Sie key_features handhaben möchten
    };
}