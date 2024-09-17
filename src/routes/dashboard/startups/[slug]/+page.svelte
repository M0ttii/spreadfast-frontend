<script lang="ts">
	import { Button } from "$lib/components/ui/button"
	import Label from "$lib/components/ui/label/label.svelte"
	import { ChevronRight } from "lucide-svelte"
	import type { PageData } from "../$types"
	import StartupForm from "./StartupForm.svelte"
	import type { PageDataProp, Step } from "./types"
	import Stepper from "$lib/components/ui/forms/Stepper.svelte"

	export let data: PageData & PageDataProp

	const steps: Step[] = [
		{ title: "Personal Information" },
		{ title: "Business Information" },
		{ title: "Description" },
		{ title: "Illustrations" },
		{ title: "Finish" },
	]

	const product =
		data.products &&
		data.products.find((product) => product.id.toString() === data.slug)

	console.log(product)

	let activeStep = 0

	function nextStep() {
		activeStep += 1
	}

	function prevStep() {
		activeStep -= 1
	}
</script>

<div class="flex flex-col w-full">
	<div class="absolute ml-2">
		<Stepper {steps} {activeStep}></Stepper>
	</div>
	<div class="flex flex-col items-center">
		<div class="flex flex-col space-y-8 w-1/2 pr-36 h-full">
			<div class="flex flex-col items-start space-y-8">
				<Label class="text-3xl font-semibold text-black/80 font-inter"
					>Configuration</Label
				>
				<StartupForm data={data.form} {activeStep}></StartupForm>
			</div>
			<div class="flex w-full justify-between">
				<div class="flex">
					<Button on:click={prevStep} variant="outline">Back</Button>
				</div>
				<div class="flex">
					<Button
						on:click={nextStep}
						class="bg-[#9139F6] font-inter font-semibold py-3 px-4"
						>Continue <ChevronRight
							strokeWidth={2.5}
							class="w-[1.2rem] ml-1 h-[1.2rem] mt-0.5"
						></ChevronRight></Button
					>
				</div>
			</div>
		</div>
	</div>
</div>
