import { ColumnDef } from '@tanstack/react-table';
import { useState, useEffect } from 'react';

export type GoodsTable = {
	name: string;
	qty: number;
	price: number;
	total: number;
	stocks: number;
};

const TableCell = ({ getValue, row, column, table }) => {
	const initialValue = getValue();
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	const onBlur = () => {
		table.options.meta?.updateData(row.index, column.id, value);
	};

	return (
		<input
			value={value}
			onChange={e => setValue(e.target.value)}
			onBlur={onBlur}
		/>
	);
};

export const columns: ColumnDef<GoodsTable>[] = [
	{
		accessorKey: 'name',
		header: 'Название',
	},
	{
		accessorKey: 'qty',
		header: 'Кол-во',
		cell: TableCell,
	},
	{
		accessorKey: 'price',
		header: 'Цена',
		cell: value => {
			console.log(value);
			return value.getValue();
		},
	},
	{
		accessorFn: row => row.qty * row.price,
		header: 'Итог',
	},
	{
		accessorKey: 'stocks',
		header: 'Склад',
	},
	{
		id: 'info',
		header: 'Инфо',
	},
];
