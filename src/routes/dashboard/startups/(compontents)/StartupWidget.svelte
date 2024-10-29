<script lang="ts">
	import { redirect } from "@sveltejs/kit"
	import type { SvelteComponent } from "svelte"
	import Logo from "./Logo.svelte"
	import Button from "$lib/components/ui/button/button.svelte"
	import { goto } from "$app/navigation"

	interface Props {
		logo: typeof Logo
		websiteUrl: string
		productID: number
	}

	let { logo, websiteUrl, productID }: Props = $props()

	function handlePublish(event: MouseEvent) {
		event.preventDefault()
		event.stopPropagation()
		// Hier können Sie die Logik für das Veröffentlichen hinzufügen
		goto(`/dashboard/publish/${productID}`)
	}

	function handleEdit(event: MouseEvent) {
		event.preventDefault()
		event.stopPropagation()
		goto(`/dashboard/startups/${productID}`)
	}

	function stopPropagation(fn: any) {
		return function (this: any, event: any) {
			event.stopPropagation()
			fn.call(this, event)
		}
	}

	function preventDefault(fn: any) {
		return function (this: any, event: any) {
			event.preventDefault()
			fn.call(this, event)
		}
	}

	const SvelteComponent_1 = $derived(logo)
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	class="flex flex-col whitespace-nowrap rounded-none max-w-72 cursor-pointer"
>
	<div
		class="flex flex-col w-full rounded-md border hover:border-zinc-300 border-solid bg-[#ffffff] border-[#DFDFDF] min-w-96 min-h-80 p-5 space-y-5"
	>
		<div class="flex items-center space-x-4">
			<SvelteComponent_1 />
			<h2 class="text-2xl font-semibold tracking-normal text-[#414141]">
				SaasCraft
			</h2>
		</div>
		<div class="bg-red-400 rounded-xl w-full h-full"></div>
		<div class="flex justify-end space-x-3">
			<Button
				onclick={preventDefault(stopPropagation(handleEdit))}
				class="shadow-md border-[#C0BDBD] rounded-xl "
				variant="outline">Edit</Button
			>
			<Button
				onclick={preventDefault(stopPropagation(handlePublish))}
				class="shadow-md">Publish</Button
			>
		</div>
	</div>
</div>
