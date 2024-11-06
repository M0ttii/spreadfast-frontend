<script lang="ts">
	import Calendar from "lucide-svelte/icons/calendar"
	import House from "lucide-svelte/icons/house"
	import Inbox from "lucide-svelte/icons/inbox"
	import Search from "lucide-svelte/icons/search"
	import Settings from "lucide-svelte/icons/settings"
	import * as Sidebar from "$lib/components/ui/sidebar/index.js"
	import { GalleryVerticalEnd } from "lucide-svelte"
	import type { ComponentProps } from "svelte"
	import Nav from "./nav.svelte"
	import OptInForm from "./opt-in-form.svelte"
	import Building_2 from "lucide-svelte/icons/building-2"
	import ClipboardList from "lucide-svelte/icons/clipboard-list"
	import LifeBuoy from "lucide-svelte/icons/life-buoy"
	import Send from "lucide-svelte/icons/send"
	import Logo from "../startups/(compontents)/Logo.svelte"
	import NavSecondary from "./nav-secondary.svelte"
	import NavUser from "./nav-user.svelte"

	const data = {
		user: {
			name: "shadcn",
			email: "m@example.com",
			avatar: "/avatars/shadcn.jpg",
		},
		items: [
			{
				title: "Startups",
				url: "/dashboard/startups",
				icon: Building_2,
			},
			{
				title: "Listings",
				url: "/dashboard/listings",
				icon: ClipboardList,
			},
		],
		navSecondary: [
			{
				title: "Support",
				url: "#",
				icon: LifeBuoy,
			},
			{
				title: "Feedback",
				url: "#",
				icon: Send,
			},
		],
	}

	// Menu items.
	const items = [
		{
			title: "Startups",
			url: "/dashboard/startups",
			icon: Building_2,
		},
		{
			title: "Listings",
			url: "/dashboard/listings",
			icon: ClipboardList,
		},
	]

	let {
		ref = $bindable(null),
		...restProps
	}: ComponentProps<typeof Sidebar.Root> = $props()
</script>

<Sidebar.Root variant="inset" bind:ref {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<a href="##" {...props}>
							<div
								class="flex size-8 items-center justify-center rounded-lg"
							>
								<Logo></Logo>
							</div>
							<div class="flex flex-col gap-0.5 leading-none">
								<span class="font-semibold">Spreadfast</span>
								<span class="">1.0.0</span>
							</div>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<Nav {items} />
		<NavSecondary items={data.navSecondary} class="mt-auto" />
	</Sidebar.Content>
	<Sidebar.Footer>
		<NavUser user={data.user} />
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
