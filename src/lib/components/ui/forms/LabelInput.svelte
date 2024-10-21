<script lang="ts">
	import * as Form from "$lib/components/ui/form"
	import type { SuperForm } from "sveltekit-superforms/client"
	import { Input } from "../input"
	import Label from "../label/label.svelte"
	import type { Writable } from "svelte/store"
	import { getFormField } from "formsnap"

	export let form
	export let form_name: string
	export let label: string
	export let placeholder: string

	const { form: formData } = form
	console.log("hallo")
	console.log("FormData: ", $formData)
</script>

<Form.Field {form} name={form_name} class="space-y-1">
	<Form.Control let:attrs>
		<Form.Label class="font-inter leading-3">{label}</Form.Label>
		<Input
			class="rounded-lg"
			{...attrs}
			{placeholder}
			bind:value={$formData[form_name]}
		/>
	</Form.Control>
</Form.Field>
