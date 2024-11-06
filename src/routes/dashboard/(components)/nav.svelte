<script lang="ts">
	import * as Sidebar from "$lib/components/ui/sidebar"

	let {
		items,
	}: {
		items: { title: string; url: string; icon: any; isActive?: boolean }[]
	} = $props()
</script>

<Sidebar.Menu>
	{#each items as item (item.title)}
		<Sidebar.MenuItem>
			<Sidebar.MenuButton isActive={item.isActive}>
				{#snippet child({ props })}
					<a href={item.url} {...props}>
						<item.icon />
						<span class="font-inter">{item.title}</span>
					</a>
				{/snippet}
			</Sidebar.MenuButton>
		</Sidebar.MenuItem>
	{/each}
</Sidebar.Menu>
