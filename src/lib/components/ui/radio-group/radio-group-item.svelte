<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from "bits-ui"
	import Circle from "lucide-svelte/icons/circle"
	import { cn } from "$lib/utils.js"

	type $$Props = RadioGroupPrimitive.ItemProps
	type $$Events = RadioGroupPrimitive.ItemEvents

	let className: $$Props["class"] = undefined
	export let value: $$Props["value"]
	export { className as class }
</script>

<RadioGroupPrimitive.Item
	{value}
	class={cn(
		"size-5 shrink-0 cursor-default rounded-full border border-border-input bg-background transition-all duration-100 ease-in-out hover:border-dark-40 data-[state=checked]:border-[7px] data-[state=checked]:border-purple-600",
		className,
	)}
	{...$$restProps}
	on:click
></RadioGroupPrimitive.Item>
