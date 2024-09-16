<script lang="ts">
	import Label from "$lib/components/ui/label/label.svelte"
	import type { PageData } from "../$types"
	import StartupForm from "./StartupForm.svelte"
	import type { PageDataProp } from "./types"

	export let data: PageData & PageDataProp

	const product =
		data.products &&
		data.products.find((product) => product.id.toString() === data.slug)

	console.log(product)
</script>

<div class="flex flex-col items-center">
	<div class=" w-1/2 h-full">
		<div class="flex flex-col items-start">
			<Label class="text-3xl font-semibold">Configuration</Label>
			<StartupForm data={data.form}></StartupForm>
		</div>
	</div>
</div>
