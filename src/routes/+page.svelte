<script lang="ts">
	//redirect to /dashboard
	import { redirect } from "@sveltejs/kit"
	export const load = () => {
		redirect(303, "/dashboard")
	}
</script>

<div>Hallo</div>
