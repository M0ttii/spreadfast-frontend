<script lang="ts">
	import { goto } from "$app/navigation"
	import { Badge } from "$lib/components/ui/badge"
	import * as Card from "$lib/components/ui/card"
	import { Label } from "$lib/components/ui/label"

	export const listing: ListingsWithDirectories = $props()

	function navigate() {
		goto("/dashboard/listings/1")
	}

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

	function handleClick(fn: any) {
		return function (this: any, event: any) {
			fn.call(this, event)
		}
	}
</script>

<Card.Root
	onclick={handleClick(navigate)}
	class="transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:cursor-pointer"
>
	<Card.Content class="p-6">
		<div class="flex flex-col gap-2">
			<div class="flex gap-4">
				<Label class="text-center text-md">saascraft.de</Label>
				<Badge class="bg-red-400 text-black ml-auto">Destructive</Badge>
			</div>
			<Label class="font-normal">Subtitle</Label>
		</div>
	</Card.Content>
</Card.Root>
