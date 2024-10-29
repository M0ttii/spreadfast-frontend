<script>
	import * as Card from "$lib/components/ui/card"
	import { Label } from "$lib/components/ui/label"
	import Table from "../(components)/Table.svelte"

	export let data
	const { directories } = data
</script>

<div class="flex flex-col gap-4 pr-10">
	<div class="grid gap-4 grid-cols-4 w-full">
		<Card.Root>
			<Card.Header>
				<Label class="font-medium">Total Listings</Label>
			</Card.Header>
			<Card.Content class="flex flex-col gap-4">asd</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<Label class="font-medium">Total Visits since listed</Label>
			</Card.Header>
			<Card.Content class="flex flex-col gap-4">asd</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<Label class=" text-[0.7rem] font-medium">IN PROGRESS</Label>
			</Card.Header>
			<Card.Content class="flex flex-col gap-4">asd</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<Label class=" text-[0.7rem] font-medium">IN PROGRESS</Label>
			</Card.Header>
			<Card.Content class="flex flex-col gap-4">asd</Card.Content>
		</Card.Root>
	</div>
	<Table {directories} />
</div>
