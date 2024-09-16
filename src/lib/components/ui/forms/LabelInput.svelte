<script lang="ts">
	import * as Form from "$lib/components/ui/form"
	import type { SuperForm } from "sveltekit-superforms/client"
	import { Input } from "../input"
	import Label from "../label/label.svelte"

	export let form: SuperForm<any>
	export let form_name: string
	export let label: string
	export let placeholder: string
</script>

<Form.Field {form} name={form_name}>
	<Form.Control let:attrs>
		<Form.Label>{label}</Form.Label>
		<Input class="" {...attrs} {placeholder} />
	</Form.Control>
</Form.Field>
