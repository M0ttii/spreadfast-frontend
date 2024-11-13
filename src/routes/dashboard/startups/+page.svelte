<script>
	import Button from "$lib/components/ui/button/button.svelte"
	import Logo from "./(compontents)/Logo.svelte"
	import StartupWidget from "./(compontents)/StartupWidget.svelte"

	export let data
	const { startups } = data
	console.log(data)
</script>

{#if startups != null}
	<div class="grid grid-cols-4">
		{#each startups as startup}
			{#if startup.url}
				<StartupWidget
					logo={Logo}
					productID={startup.id}
					websiteUrl={startup.url}
				></StartupWidget>
			{/if}
		{/each}
	</div>
{:else}
	<p class="text-white">No products found</p>
{/if}
