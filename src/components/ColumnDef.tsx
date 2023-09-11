import { ColumnDef } from '@tanstack/react-table';
import { TableCell } from './TableCell';

export type GoodsTable = {
	name: string;
	qty: number;
	price: number;
	total: number;
	stocks: number;
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
			// console.log(value);
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
