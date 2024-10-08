<script lang="ts">
	import * as Form from "$lib/components/ui/form"
	import type { SuperForm } from "sveltekit-superforms/client"
	import * as Select from "$lib/components/ui/select/index.js"
	import { Textarea } from "../textarea"

	export let form: SuperForm<any>
	export let form_name: string
	export let label: string
	export let value: any
	export let placeholder: string
</script>

<Form.Field {form} name={form_name} class="space-y-1">
	<Form.Control let:attrs>
		<Form.Label class="font-inter leading-3">{label}</Form.Label>
		<Textarea {...attrs} {placeholder} class="resize-none" bind:value />
	</Form.Control>
</Form.Field>
