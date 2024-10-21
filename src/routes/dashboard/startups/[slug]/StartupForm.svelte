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
	import LabelSelect from "$lib/components/ui/forms/LabelSelect.svelte"
	import LabelDatePicker from "$lib/components/ui/forms/LabelDatePicker.svelte"
	import LabelTextArea from "$lib/components/ui/forms/LabelTextArea.svelte"
	import { categoryContent } from "./categoryContents"
	import LabelFileUpload from "$lib/components/ui/forms/LabelFileUpload.svelte"
	import type { SuperFormData } from "sveltekit-superforms/client"
	import type { PageData } from "../$types"

	export let data: PageData & PageDataProp
	export let activeStep = 0
	let selectedItem = writable("1")

	const form = superForm(data.form, {
		validators: zodClient(formSchema),
		resetForm: false,
	})

	const { form: formData, enhance } = form

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

	const pricingContent = [
		{ value: "free", label: "Free" },
		{ value: "paid", label: "Paid" },
		{ value: "freemium", label: "Freemium" },
	]
</script>

<div class="flex w-full">
	<form method="POST" class="w-full" use:enhance>
		<div class="flex flex-col space-y-7 w-full">
			{#if !$formData}
				<p>No form data</p>
			{/if}
			{#if activeStep === 0 && $formData}
				<div
					class="flex flex-col space-y-7 w-full"
					in:receive={{ key: "step0" }}
					out:send={{ key: "step0" }}
				>
					<div class="flex flex-col space-y-2 w-full">
						<Label class="font-semibold font-inter text-base">
							General Information
						</Label>
						<div class="grid grid-cols-2 gap-4 w-full">
							<LabelInput
								{form}
								form_name="firstname"
								label="First Name"
								placeholder="Enter your first name"
							/>
							<LabelInput
								{form}
								form_name="lastname"
								label="Last Name"
								placeholder="Enter your last name"
							/>
							<LabelInput
								{form}
								form_name="email"
								label="Email"
								placeholder="Enter your email"
							/>
							<LabelInput
								{form}
								form_name="role"
								label="Your Role in the Company"
								placeholder="Enter your role"
							/>
							<LabelInput
								{form}
								form_name="city"
								label="Company City"
								placeholder="Enter your city"
							/>
							<LabelInput
								{form}
								form_name="country"
								label="Company Country"
								placeholder="Enter your country"
							/>
							<LabelInput
								{form}
								form_name="twitter"
								label="Personal Twitter"
								placeholder="Enter your twitter"
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
					<div class="grid grid-cols-2 gap-4 w-full">
						<LabelInput
							{form}
							form_name="url"
							label="URL"
							placeholder="Enter your startup's url"
						/>
						<LabelInput
							{form}
							form_name="affiliate"
							label="Affiliate Link"
							placeholder="Enter your affiliate link"
						/>
						<LabelInput
							{form}
							form_name="ctwitter"
							label="Company Twitter"
							placeholder="Enter your company's twitter"
						/>
						<LabelSelect
							{form}
							form_name="pricing_select"
							label="Pricing Type"
							content="Pricing"
							contents={pricingContent}
						></LabelSelect>
						<LabelDatePicker
							{form}
							form_name="launch_date"
							label="Launch Date"
						></LabelDatePicker>
						<LabelInput
							{form}
							form_name="starting_price"
							label="Starting Price"
							placeholder="Enter the starting price"
						/>
					</div>
				</div>
			{:else if activeStep === 2}
				<div
					class="flex flex-col space-y-2 w-full"
					in:receive={{ key: "step2" }}
					out:send={{ key: "step2" }}
				>
					<div class="grid grid-cols-2 gap-4 w-full">
						<div class="col-span-2">
							<LabelInput
								{form}
								form_name="tagline"
								label="Tagline"
								placeholder="Enter your startup's tagline"
							/>
							<LabelTextArea
								{form}
								form_name="short_description"
								label="Short Description"
								value="s"
								placeholder="Short description of your startup"
							></LabelTextArea>
							<LabelTextArea
								{form}
								form_name="long_description"
								label="Long Description"
								value="s"
								placeholder="Long description of your startup"
							></LabelTextArea>
						</div>
						<LabelSelect
							customClass="overflow-y-auto max-h-72"
							{form}
							form_name="category_select"
							label="Category"
							content="Category"
							contents={categoryContent}
						></LabelSelect>
						<LabelInput
							{form}
							form_name="tags"
							label="Tags"
							placeholder="Enter tags"
						/>
						<LabelInput
							{form}
							form_name="use_case_1"
							label="Use Case 1"
							placeholder="Use Case 1"
						></LabelInput>
						<LabelInput
							{form}
							form_name="use_case_2"
							label="Use Case 2"
							placeholder="Use Case 2"
						></LabelInput>
						<LabelInput
							{form}
							form_name="key_features"
							label="Key Features"
							placeholder="Key Features"
						></LabelInput>
					</div>
				</div>
			{:else if activeStep === 3}
				<div
					class="flex flex-col space-y-2 w-full"
					in:receive={{ key: "step3" }}
					out:send={{ key: "step3" }}
				>
					<div class="grid grid-cols-2 gap-4 w-full">
						<LabelFileUpload
							{form}
							form_name="logo"
							label="Logo of your Startup"
							placeholder="Upload"
						/>
						<LabelFileUpload
							{form}
							form_name="icon"
							label="Icon of your startup"
							placeholder="Upload"
						/>
						<div class="col-span-2">
							<LabelFileUpload
								{form}
								form_name="screenshots"
								label="Screenshot of your startup"
								placeholder="Upload"
							/>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</form>
</div>
