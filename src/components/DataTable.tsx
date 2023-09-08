import { useState } from 'react';
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import './DataTable.css';

interface DataTableProps<TData, TValue> {
	defaultData: TData[];
	columns: ColumnDef<TData, TValue>[];
}

function DataTable<TData, TValue>({
	defaultData,
	columns,
}: DataTableProps<TData, TValue>) {
	
	const [data, setData] = useState(() => [...defaultData]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		meta: {
			updateData: (rowIndex: number, columnId: string, value: string) => {
				setData(old =>
					old.map((row, index) => {
						// console.log('row: ', row);

						if (index === rowIndex) {
							return {
								...old[rowIndex],
								[columnId]: value,
							};
						}
						return row;
					})
				);
			},
		},
	});

	return (
		<>
			<table>
				<thead>
					{table.getHeaderGroups().map(headerGroup => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map(header => (
								<th key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext()
									)}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map(row => (
						<tr key={row.id}>
							{row.getVisibleCells().map(cell => (
								<td key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<pre>{JSON.stringify(data, null, '\t')}</pre>
		</>
	);
}

export default DataTable;
