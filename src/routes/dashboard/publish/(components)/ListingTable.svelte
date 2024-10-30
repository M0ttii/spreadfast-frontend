<script>
	import * as Table from "$lib/components/ui/table"
	import {
		createRender,
		createTable,
		Render,
		Subscribe,
	} from "svelte-headless-table"
	import {
		addHiddenColumns,
		addPagination,
		addSelectedRows,
		addSortBy,
		addTableFilter,
	} from "svelte-headless-table/plugins"
	import { readable } from "svelte/store"
	import DataTableCheckbox from "./data-table-checkbox.svelte"
	import { Input } from "$lib/components/ui/input"
	import { cn } from "$lib/utils"
	import { Button } from "$lib/components/ui/button"
	import { ArrowUpDown } from "lucide-svelte"

	export let directories

	const table = createTable(readable(directories), {
		sort: addSortBy({ disableMultiSort: true }),
		page: addPagination(),
		filter: addTableFilter({
			fn: ({ filterValue, value }) => value.includes(filterValue),
		}),
		select: addSelectedRows(),
	})

	const columns = table.createColumns([
		table.column({
			header: (_, { pluginStates }) => {
				const { allPageRowsSelected } = pluginStates.select
				return createRender(DataTableCheckbox, {
					checked: allPageRowsSelected,
				})
			},
			accessor: "id",
			cell: ({ row }, { pluginStates }) => {
				const { getRowState } = pluginStates.select
				const { isSelected } = getRowState(row)

				return createRender(DataTableCheckbox, {
					checked: isSelected,
				})
			},
			plugins: {
				sort: {
					disable: true,
				},
				filter: {
					exclude: true,
				},
			},
		}),
		table.column({
			header: "Directory",
			accessor: "display_name",
			plugins: { sort: { disable: true }, filter: { exclude: false } },
		}),
		table.column({
			header: "Monthly Site Visitors",
			accessor: "monthly_visits",
			plugins: { sort: { disable: true }, filter: { exclude: false } },
		}),
	])

	const {
		headerRows,
		pageRows,
		tableAttrs,
		tableBodyAttrs,
		flatColumns,
		pluginStates,
		rows,
	} = table.createViewModel(columns)

	const { sortKeys } = pluginStates.sort

	const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page
	const { filterValue } = pluginStates.filter

	const { selectedDataIds } = pluginStates.select

	console.log("directories", directories)
	console.log("pageRows", $pageRows)
</script>

<div class="w-full">
	<div class="flex items-center py-4">
		<Input
			class="max-w-sm"
			placeholder="Filter emails..."
			type="text"
			bind:value={$filterValue}
		/>
	</div>
	<div class="rounded-md border">
		<Table.Root {...$tableAttrs}>
			<Table.Header>
				{#each $headerRows as headerRow}
					<Subscribe rowAttrs={headerRow.attrs()}>
						<Table.Row>
							{#each headerRow.cells as cell (cell.id)}
								<Subscribe
									attrs={cell.attrs()}
									let:attrs
									props={cell.props()}
									let:props
								>
									<Table.Head
										{...attrs}
										class={cn(
											"[&:has([role=checkbox])]:pl-3",
										)}
									>
										<Render of={cell.render()} />
									</Table.Head>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			</Table.Header>
			<Table.Body {...$tableBodyAttrs}>
				{#each $pageRows as row (row.id)}
					<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
						<Table.Row
							{...rowAttrs}
							data-state={$selectedDataIds[row.id] && "selected"}
						>
							{#each row.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs>
									<Table.Cell
										class="[&:has([role=checkbox])]:pl-3"
										{...attrs}
									>
										<Render of={cell.render()} />
									</Table.Cell>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<div class="flex items-center justify-end space-x-2 py-4">
		<div class="text-muted-foreground flex-1 text-sm">
			{Object.keys($selectedDataIds).length} of {$rows.length} row(s) selected.
		</div>
		<Button
			variant="outline"
			size="sm"
			disabled={Object.keys($selectedDataIds).length === 0}>Next</Button
		>
	</div>
</div>
