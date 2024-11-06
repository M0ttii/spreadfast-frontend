<!-- @migration-task Error while migrating Svelte code: `$:` is not allowed in runes mode, use `$derived` or `$effect` instead -->
<!-- @migration-task Error while migrating Svelte code: `$:` is not allowed in runes mode, use `$derived` or `$effect` instead -->
<script>
	import { Button } from "$lib/components/ui/button"
	import * as Card from "$lib/components/ui/card"
	import {
		Badge,
		Home,
		LineChart,
		Package,
		ShoppingCart,
		Users,
	} from "lucide-svelte"
	import * as Sidebar from "$lib/components/ui/sidebar"
	import { onMount } from "svelte"
	import { invalidate } from "$app/navigation"
	import { Separator } from "$lib/components/ui/separator"
	import * as Breadcrumb from "$lib/components/ui/breadcrumb"
	import NewSidebar from "./(components)/NewSidebar.svelte"

	let { data, children } = $props()

	let { supabase, session } = $derived(data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange(
			(event, newSession) => {
				if (newSession?.expires_at !== session?.expires_at) {
					invalidate("supabase:auth")
				}
			},
		)

		return () => data.subscription.unsubscribe()
	})
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Sidebar.Provider>
	<NewSidebar />
	<Sidebar.Inset>
		<header class="flex h-16 shrink-0 items-center gap-2">
			<div class="flex items-center gap-2 px-4">
				<Sidebar.Trigger class="-ml-1" />
				<Separator orientation="vertical" class="mr-2 h-4" />
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item class="hidden md:block">
							<Breadcrumb.Link href="#"
								>Building Your Application</Breadcrumb.Link
							>
						</Breadcrumb.Item>
						<Breadcrumb.Separator class="hidden md:block" />
						<Breadcrumb.Item>
							<Breadcrumb.Page>Data Fetching</Breadcrumb.Page>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>
			</div>
		</header>
		<main>
			<div class="flex flex-1 flex-col gap-4 p-4">
				{@render children?.()}
			</div>
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>
