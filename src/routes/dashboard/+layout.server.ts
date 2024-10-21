import type { SupabaseClient, User } from "@supabase/supabase-js";
import { redirect } from "@sveltejs/kit"
import type { Database } from "../../DatabaseDefinitions";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals: { supabaseServiceRole, safeGetSession }, cookies }) => {
	const { session, user } = await safeGetSession()

	if (!session || !user?.id) {
		redirect(303, "/login")
	}

	const d = await getStartups({ supabaseServiceRole: supabaseServiceRole, user })
	const { startups } = d


	return { session, startups, cookies: cookies.getAll() }
}

const getProducts = async ({
	supabaseServiceRole,
	user,
}: {
	supabaseServiceRole: SupabaseClient<Database>
	user: User
}) => {
	const { data: products, error } = await supabaseServiceRole
		.from("user_products")
		.select("*")
		.eq("profile_id", user.id)

	return { products, error }
}

const getStartups = async ({
	supabaseServiceRole,
	user,
}: {
	supabaseServiceRole: SupabaseClient<Database>
	user: User
}) => {
	const { data: startups, error } = await supabaseServiceRole
		.from("startups")
		.select("*")
		.eq("profile_id", user.id)

	return { startups, error }
}