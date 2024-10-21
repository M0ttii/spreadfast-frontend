<script lang="ts">
	import * as Form from "$lib/components/ui/form"
	import type { SuperForm } from "sveltekit-superforms/client"
	import * as Select from "$lib/components/ui/select/index.js"

	export let form: SuperForm<any>
	export let form_name: string
	export let label: string
	export let content: string
	export let contents: SelectItem[] = []
	export let customClass: string = ""

	const { form: formData } = form

	interface SelectItem {
		value: string
		label: string
	}

	$: selectedPricingType = $formData[form_name]
		? {
				label: $formData[form_name],
				value: $formData[form_name],
			}
		: undefined
</script>

<Form.Field {form} name={form_name} class="space-y-1">
	<Form.Control let:attrs>
		<Form.Label class="font-inter leading-3">{label}</Form.Label>
		<Select.Root
			portal={null}
			selected={selectedPricingType}
			onSelectedChange={(v) => {
				v && ($formData[form_name] = v.value)
			}}
		>
			<Select.Trigger class="w-[180px]" {...attrs}>
				<Select.Value placeholder="Select a {content}" />
			</Select.Trigger>
			<Select.Content class={customClass}>
				<Select.Group>
					<Select.Label>{content}</Select.Label>
					{#each contents as fruit}
						<Select.Item value={fruit.value} label={fruit.label}
							>{fruit.label}</Select.Item
						>
					{/each}
				</Select.Group>
			</Select.Content>
		</Select.Root>
		<input hidden bind:value={$formData[form_name]} name={attrs.name} />
	</Form.Control>
</Form.Field>
