<script lang="ts">
	import { Check } from "lucide-svelte"
	import { cn } from "$lib/utils"
	import type { Step } from "../../../../routes/dashboard/startups/[slug]/types"
	import type { Writable } from "svelte/store"

	export let steps: Step[]
	export let activeStep: Writable<number>
</script>

<div class="max-w-md mx-auto">
	<ol class="relative border-l border-primary/20">
		{#each steps as step, index}
			<li class="mb-10 ml-6">
				<span
					class={cn(
						"absolute flex items-center justify-center  w-5 h-5 rounded-full -left-[0.654rem] ring-8 ring-[#F9F9FA]",
						index < $activeStep
							? "bg-purple-600 text-primary-foreground"
							: index === $activeStep
								? "bg-[#F9F9FA] border-[6px] border-purple-600 text-primary-foreground"
								: "bg-[#F9F9FA] border border-purple-600 text-secondary-foreground",
					)}
				>
					{#if index >= $activeStep}
						<span
							class="text-xs flex items-center justify-center w-full h-full"
						></span>
					{/if}
				</span>
				<h3
					class={cn(
						"font-medium leading-tight",
						index <= $activeStep
							? "text-primary"
							: "text-muted-foreground",
					)}
				>
					{step.title}
				</h3>
			</li>
		{/each}
	</ol>
</div>
