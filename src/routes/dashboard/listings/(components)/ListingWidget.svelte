<script lang="ts">
	import { Badge } from "$lib/components/ui/badge"
	import * as Card from "$lib/components/ui/card"
	import { Label } from "$lib/components/ui/label"
</script>

<Card.Root
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
