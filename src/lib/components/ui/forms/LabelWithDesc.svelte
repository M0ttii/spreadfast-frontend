<script lang="ts">
	import Label from "../label/label.svelte"

	export let label: string
	export let description: string
</script>

<div class="flex flex-col space-y-1">
	<Label class="font-semibold font-inter text-base">{label}</Label>
	<p class="text-[0.95rem] leading-4 line text-gray-500 font-inter">
		{description}
	</p>
</div>
