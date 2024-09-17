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
	import * as Form from "$lib/components/ui/form/index.js"
	import * as RadioGroup from "$lib/components/ui/radio-group/index.js"
	import { Label } from "$lib/components/ui/label"
	import GroupSelectWrapper from "$lib/components/ui/forms/GroupSelectWrapper.svelte"
	import GroupSelect from "$lib/components/ui/forms/GroupSelect.svelte"
	import { writable } from "svelte/store"
	import LabelWithDesc from "$lib/components/ui/forms/LabelWithDesc.svelte"
	import { crossfade, fade, fly } from "svelte/transition"
	import { quintOut } from "svelte/easing"

	export let data: SuperValidated<Infer<FormSchema>>

	const form = superForm(data, {
		validators: zodClient(formSchema),
	})

	const { form: formData, enhance } = form
	export let activeStep = 0
	let selectedItem = writable("1")

	const showNextStep = writable(false)

	const [send, receive] = crossfade({
		duration: 300,
		fallback(node, params) {
			const style = getComputedStyle(node)
			const transform = style.transform === "none" ? "" : style.transform

			return {
				duration: 300,
				easing: quintOut,
				css: (t) => `
        transform: ${transform} scale(${t});
        opacity: ${t}
      `,
			}
		},
	})
</script>

<div class="flex w-full">
	<form method="POST" class="w-full" use:enhance>
		<div class="flex flex-col space-y-7 w-full">
			{#if activeStep === 0}
				<div
					class="flex flex-col space-y-7 w-full"
					in:receive={{ key: "step0" }}
					out:send={{ key: "step0" }}
				>
					<div class="flex flex-col space-y-5">
						<div class="flex flex-col space-y-3">
							<LabelWithDesc
								label="Business Type"
								description="Select your type of business"
							/>
							<GroupSelectWrapper {selectedItem}>
								<GroupSelect
									{selectedItem}
									title="Test1"
									value="1"
								></GroupSelect>
								<GroupSelect
									{selectedItem}
									title="Test2"
									value="2"
								></GroupSelect>
							</GroupSelectWrapper>
						</div>
					</div>
					<div class="flex flex-col space-y-2 w-full">
						<Label class="font-semibold font-inter text-base">
							General Information
						</Label>
						<div class="grid grid-cols-2 gap-4 w-full">
							<LabelInput
								{form}
								form_name="name"
								label="Name"
								placeholder="Enter your name"
							/>
							<LabelInput
								{form}
								form_name="email"
								label="Email"
								placeholder="Enter your email"
							/>
							<LabelInput
								{form}
								form_name="phone"
								label="Phone"
								placeholder="Enter your phone number"
							/>
							<LabelInput
								{form}
								form_name="address"
								label="Address"
								placeholder="Enter your address"
							/>
							<LabelInput
								{form}
								form_name="city"
								label="City"
								placeholder="Enter your city"
							/>
							<LabelInput
								{form}
								form_name="state"
								label="State"
								placeholder="Enter your state"
							/>
						</div>
					</div>
				</div>
			{:else if activeStep === 1}
				<div
					class="flex flex-col space-y-2 w-full"
					in:receive={{ key: "step1" }}
					out:send={{ key: "step1" }}
				>
					<Label class="font-semibold font-inter text-base">
						Other Information
					</Label>
					<div class="grid grid-cols-2 gap-4 w-full">
						<LabelInput
							{form}
							form_name="name"
							label="Name"
							placeholder="Enter your name"
						/>
						<LabelInput
							{form}
							form_name="email"
							label="Email"
							placeholder="Enter your email"
						/>
						<LabelInput
							{form}
							form_name="phone"
							label="Phone"
							placeholder="Enter your phone number"
						/>
						<LabelInput
							{form}
							form_name="address"
							label="Address"
							placeholder="Enter your address"
						/>
						<LabelInput
							{form}
							form_name="city"
							label="City"
							placeholder="Enter your city"
						/>
						<LabelInput
							{form}
							form_name="state"
							label="State"
							placeholder="Enter your state"
						/>
					</div>
				</div>
			{/if}
		</div>
	</form>
</div>
