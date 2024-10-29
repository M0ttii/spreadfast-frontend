<script lang="ts">
	import * as Tabs from "$lib/components/ui/tabs"
	import * as Card from "$lib/components/ui/card/index.js"
	import { Button } from "$lib/components/ui/button/index.js"
	import { Input } from "$lib/components/ui/input/index.js"
	import { Label } from "$lib/components/ui/label/index.js"
	import ListingWidget from "./(components)/ListingWidget.svelte"
</script>

<Tabs.Root value="account">
	<div class="w-[400px]">
		<Tabs.List class="grid w-full grid-cols-3">
			<Tabs.Trigger value="account">All</Tabs.Trigger>
			<Tabs.Trigger value="password">In Progress</Tabs.Trigger>
			<Tabs.Trigger value="completed">Completed</Tabs.Trigger>
		</Tabs.List>
	</div>
	<div class=" w-[800px]">
		<Tabs.Content value="account">
			<div class="flex flex-col gap-4">
				<Card.Root>
					<Card.Header>
						<Label class=" text-[0.7rem] font-medium"
							>IN PROGRESS</Label
						>
					</Card.Header>
					<Card.Content class="flex flex-col gap-4">
						<ListingWidget />
						<ListingWidget />
					</Card.Content>
				</Card.Root>
				<Card.Root>
					<Card.Header>
						<Label class=" text-[0.7rem] font-medium"
							>COMPLETED</Label
						>
					</Card.Header>
					<Card.Content class="flex flex-col gap-4">
						<ListingWidget />
						<ListingWidget />
					</Card.Content>
				</Card.Root>
			</div>
		</Tabs.Content>
		<Tabs.Content value="password"></Tabs.Content>
		<Tabs.Content value="completed"></Tabs.Content>
	</div>
</Tabs.Root>
