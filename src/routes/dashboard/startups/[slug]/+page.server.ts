import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params: { slug } }) => {
    return {
        slug: slug
    }
}