<script>
	import { columns } from "../(components)/table/columns"
	import DataTable from "../(components)/table/data-table.svelte"

	let { data } = $props()
	let { directories } = data

	directories = directories ?? []
</script>

<div class="flex w-full h-full">
	<div class="flex w-full p-52 items-center">
		<DataTable {directories} {columns} />
	</div>
</div>
