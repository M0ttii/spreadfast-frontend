<script lang="ts">
	import {
		superForm,
		type Infer,
		type SuperValidated,
	} from "sveltekit-superforms"
	import { formSchema, type FormSchema } from "./schema"
	import type { PageDataProp } from "./types"
	import { zodClient } from "sveltekit-superforms/adapters"
	import LabelInput from "$lib/components/ui/forms/LabelInput.svelte"

	export let data: SuperValidated<Infer<FormSchema>>

	const form = superForm(data, {
		validators: zodClient(formSchema),
	})

	const { form: formData, enhance } = form
</script>

<form method="POST" use:enhance>
	<LabelInput {form} form_name="username" label="Name" placeholder="Name" />
</form>
