<script lang="ts">
	import type { Writable } from "svelte/store"

	import RadioGroup from "../radio-group/radio-group.svelte"

	export let selectedItem: Writable<string>
</script>

<RadioGroup
	bind:value={$selectedItem}
	class="grid grid-cols-1 sm:grid-cols-3 gap-4"
>
	<slot />
</RadioGroup>
