<script lang="ts">
	import * as Form from "$lib/components/ui/form"
	import type { SuperForm } from "sveltekit-superforms/client"
	import * as Select from "$lib/components/ui/select/index.js"

	import CalendarIcon from "lucide-svelte/icons/calendar"
	import {
		DateFormatter,
		type DateValue,
		getLocalTimeZone,
		parseDate,
	} from "@internationalized/date"
	import { cn } from "$lib/utils.js"
	import { Button } from "$lib/components/ui/button/index.js"
	import { Calendar } from "$lib/components/ui/calendar/index.js"
	import * as Popover from "$lib/components/ui/popover/index.js"

	const { form: formProps } = $props<{
		form: SuperForm<any>
		form_name: string
		label: string
	}>()

	const df = new DateFormatter("en-US", {
		dateStyle: "long",
	})

	const { form: formData, enhance, form, form_name, label } = formProps

	let value = $state<DateValue>()
</script>

<Form.Field {form} name={form_name} class="space-y-1">
	<Form.Control>
		{#snippet children({ attrs }: { attrs: any })}
			<Form.Label class="font-inter leading-3">{label}</Form.Label>
			<Popover.Root>
				<Popover.Trigger>
					{#snippet child({ props })}
						<Button
							variant="outline"
							class={cn(
								"w-[280px] justify-start text-left font-normal",
								!value && "text-muted-foreground",
							)}
							{...props}
						>
							<CalendarIcon class="mr-2 size-4" />
							{value
								? df.format(value.toDate(getLocalTimeZone()))
								: "Select a date"}
						</Button>
					{/snippet}
				</Popover.Trigger>
				<Popover.Content class="w-auto p-0">
					<Calendar bind:value type="single" initialFocus />
				</Popover.Content>
			</Popover.Root>
			<input hidden bind:value={$formData[form_name]} name={attrs.name} />
		{/snippet}
	</Form.Control>
</Form.Field>
