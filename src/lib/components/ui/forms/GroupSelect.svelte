<script lang="ts">
	import type { Writable } from "svelte/store"
	import { Label } from "../label"
	import { RadioGroupItem } from "../radio-group"

	export let selectedItem: Writable<string>
	export let title: string
	export let value: string
</script>

<!-- svelte-ignore missing-declaration -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="flex flex-col items-center border rounded-2xl bg-white p-6 relative h-24 min-w-48 cursor-pointer
    {$selectedItem === value ? 'border-transparent' : 'border-gray-200'}
    before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none
    {$selectedItem === value
		? 'before:border-2  before:border-purple-500'
		: ''}"
	on:click={() => ($selectedItem = value)}
>
	<RadioGroupItem {value} id={value} class="absolute left-3 top-3" />
	<Label
		for={value}
		class="flex flex-col items-center justify-center h-full w-full cursor-pointer"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="48"
			height="48"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-cloud mb-2"
		>
			<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
		</svg>
		<span class="text-center">{title}</span>
	</Label>
</div>
