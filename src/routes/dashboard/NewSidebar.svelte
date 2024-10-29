<script lang="ts">
	import Calendar from "lucide-svelte/icons/calendar"
	import House from "lucide-svelte/icons/house"
	import Inbox from "lucide-svelte/icons/inbox"
	import Search from "lucide-svelte/icons/search"
	import Settings from "lucide-svelte/icons/settings"
	import * as Sidebar from "$lib/components/ui/sidebar/index.js"
	import Logo from "./startups/(compontents)/Logo.svelte"

	// Menu items.
	const items = [
		{
			title: "Home",
			url: "#",
			icon: House,
		},
		{
			title: "Inbox",
			url: "#",
			icon: Inbox,
		},
	]
</script>

<Sidebar.Root>
	<Sidebar.Header>
		<div class="flex space-x-5 items-center">
			<Logo></Logo>
			<span class="font-inter text-[#212121] font-bold text-lg"
				>Acme Corp</span
			>
		</div>
	</Sidebar.Header>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each items as item (item.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props }: any)}
									<a href={item.url} {...props}>
										<item.icon />
										<span>{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
