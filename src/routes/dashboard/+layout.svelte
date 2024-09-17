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
	import Sidebar from "./Sidebar.svelte"

	export let data
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="bg-[#F9F9FA] grid min-h-screen gap-x-10 w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]"
>
	<div class="flex flex-col">
		<div class="flex-1 h-full">
			<Sidebar></Sidebar>
		</div>
	</div>
	<div class="flex flex-col">
		<div
			class="bg-[#FFFFFF] mt-5 border border-[#DFDFDF] rounded-lg h-16 mb-8"
		></div>
		<div class="w-full h-full">
			<slot {data}></slot>
		</div>
	</div>
</div>
