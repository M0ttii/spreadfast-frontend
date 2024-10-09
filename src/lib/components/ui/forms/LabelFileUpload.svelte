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

<Form.Field {form} name={form_name} class="space-y-1">
	<Form.Control let:attrs>
		<Form.Label class="font-inter leading-3">{label}</Form.Label>
		<Input class="rounded-lg" {...attrs} {placeholder} type="file" />
	</Form.Control>
</Form.Field>
