<script lang="ts">
	import * as Form from "$lib/components/ui/form"
	import type { SuperForm } from "sveltekit-superforms/client"
	import * as Select from "$lib/components/ui/select/index.js"

	import CalendarIcon from "lucide-svelte/icons/calendar"
	import {
		DateFormatter,
		type DateValue,
		getLocalTimeZone,
	} from "@internationalized/date"
	import { cn } from "$lib/utils.js"
	import { Button } from "$lib/components/ui/button/index.js"
	import { Calendar } from "$lib/components/ui/calendar/index.js"
	import * as Popover from "$lib/components/ui/popover/index.js"

	export let form: SuperForm<any>
	export let form_name: string
	export let label: string

	const df = new DateFormatter("en-US", {
		dateStyle: "long",
	})

	let value: DateValue | undefined = undefined
</script>

<Form.Field {form} name={form_name} class="space-y-1">
	<Form.Control let:attrs>
		<Form.Label class="font-inter leading-3">{label}</Form.Label>
		<Popover.Root>
			<Popover.Trigger asChild let:builder>
				<Button
					variant="outline"
					class={cn(
						"w-[280px] justify-start text-left font-normal",
						!value && "text-muted-foreground",
					)}
					builders={[builder]}
				>
					<CalendarIcon class="mr-2 h-4 w-4" />
					{value
						? df.format(value.toDate(getLocalTimeZone()))
						: "Pick a date"}
				</Button>
			</Popover.Trigger>
			<Popover.Content class="w-auto p-0">
				<Calendar bind:value initialFocus />
			</Popover.Content>
		</Popover.Root>
	</Form.Control>
</Form.Field>
