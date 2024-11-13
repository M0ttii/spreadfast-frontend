<script lang="ts">
	import * as Tabs from "$lib/components/ui/tabs"
	import * as Card from "$lib/components/ui/card/index.js"
	import { Button } from "$lib/components/ui/button/index.js"
	import { Input } from "$lib/components/ui/input/index.js"
	import { Label } from "$lib/components/ui/label/index.js"
	import ListingWidget from "./(components)/ListingWidget.svelte"
	import { goto } from "$app/navigation"

	export let data
	const { listings } = data

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

	console.log(listings)
</script>

<Tabs.Root value="account">
	<div class="w-[400px]">
		<Tabs.List class="grid w-full grid-cols-3">
			<Tabs.Trigger value="all">All</Tabs.Trigger>
			<Tabs.Trigger value="progress">In Progress</Tabs.Trigger>
			<Tabs.Trigger value="completed">Completed</Tabs.Trigger>
		</Tabs.List>
	</div>
	<div class=" w-[800px]">
		<Tabs.Content value="all">
			<div class="flex flex-col gap-4">
				<Card.Root>
					<Card.Header>
						<Label class=" text-[0.7rem] font-medium"
							>IN PROGRESS</Label
						>
					</Card.Header>
					<Card.Content class="flex flex-col gap-4">
						{#each listings ?? [] as listing}
							<ListingWidget {listing} />
						{/each}
					</Card.Content>
				</Card.Root>
				<Card.Root>
					<Card.Header>
						<Label class=" text-[0.7rem] font-medium"
							>COMPLETED</Label
						>
					</Card.Header>
					<Card.Content class="flex flex-col gap-4"></Card.Content>
				</Card.Root>
			</div>
		</Tabs.Content>
		<Tabs.Content value="progress"></Tabs.Content>
		<Tabs.Content value="completed"></Tabs.Content>
	</div>
</Tabs.Root>
