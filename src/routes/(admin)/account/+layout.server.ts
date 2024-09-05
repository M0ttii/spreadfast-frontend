import { redirect } from "@sveltejs/kit"
import type { LayoutServerLoad } from "./$types"
import type { SupabaseClient, User } from "@supabase/supabase-js"
import type { Database } from "../../../DatabaseDefinitions"

export const load: LayoutServerLoad = async ({
  locals: { supabase, safeGetSession },
  cookies,
}) => {
  const { session, user } = await safeGetSession()

  if (!session || !user?.id) {
    redirect(303, "/login")
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select(`*`)
    .eq("id", user?.id)
    .single()


  return { session, profile, cookies: cookies.getAll() }
}
