<script>
	import ListingTable from "../(components)/ListingTable.svelte"

	export let data
	let { directories } = data
</script>

<div class="flex w-full h-full">
	<div class="flex w-full p-52 items-center">
		<ListingTable {directories}></ListingTable>
	</div>
</div>
