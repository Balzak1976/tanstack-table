import { ColumnDef } from '@tanstack/react-table';

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
	},
	{
		accessorKey: 'price',
		header: 'Цена',
	},
	{
		accessorFn: row => row.qty * row.price,
		header: 'Итог',
	},
	{
		accessorKey: 'stocks',
		header: 'Склад',
	},
];
