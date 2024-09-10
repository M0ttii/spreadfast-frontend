import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async ({ params: { slug } }) => {
    return {
        slug: slug,
        form: await superValidate(zod(formSchema)),
    }
}