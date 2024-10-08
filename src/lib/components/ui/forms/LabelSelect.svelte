<script lang="ts">
	import * as Form from "$lib/components/ui/form"
	import type { SuperForm } from "sveltekit-superforms/client"
	import * as Select from "$lib/components/ui/select/index.js"

	export let form: SuperForm<any>
	export let form_name: string
	export let label: string
	export let content: string
	export let contents: SelectItem[] = []

	interface SelectItem {
		value: string
		label: string
	}
</script>

<Form.Field {form} name={form_name} class="space-y-1">
	<Form.Control let:attrs>
		<Form.Label class="font-inter leading-3">{label}</Form.Label>
		<Select.Root portal={null}>
			<Select.Trigger class="w-[180px]">
				<Select.Value placeholder="Select a {content}" />
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					<Select.Label>{content}</Select.Label>
					{#each contents as fruit}
						<Select.Item value={fruit.value} label={fruit.label}
							>{fruit.label}</Select.Item
						>
					{/each}
				</Select.Group>
			</Select.Content>
			<Select.Input name="favoriteFruit" />
		</Select.Root>
	</Form.Control>
</Form.Field>
