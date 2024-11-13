import type { PageServerLoad } from "./$types";

type ListingsWithDirectories = {
    created_at: string
    id: number
    productId: number | null
    profile_id: string | null
    state: string | null
    directories: {
        created_at: string
        directory: string | null
        display_name: string | null
        id: number
        logo_url: string | null
        monthly_visits: number | null
        url: string | null
    }[]
}

export const load: PageServerLoad = async ({ parent, locals: { supabase } }) => {

    const { data: listings, error } = await supabase
        .from('listings')
        .select(`
    *,
    directories:listings_directories!inner(
      directory:directories(*)
    )
  `)
        .returns<ListingsWithDirectories[]>();


    return {
        listings: listings
    }
}