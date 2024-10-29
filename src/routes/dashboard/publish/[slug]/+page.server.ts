import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ parent, params: { slug }, locals: { supabaseServiceRole } }) => {
    const parentData = await parent();
    const { startups } = parentData;

    const { data: directories } = await supabaseServiceRole.from("directories").select("*")
    const startup = startups?.find((p) => p.id.toString() === slug);

    return {
        slug: slug,
        startup: startup,
        directories: directories,
    }
}