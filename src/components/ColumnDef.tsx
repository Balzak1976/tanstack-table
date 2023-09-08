import { ColumnDef } from '@tanstack/react-table';
import {useState} from 'react'

export type GoodsTable = {
	name: string;
	qty: number;
	price: number;
	total: number;
	stocks: number;
};

const TableCell = () => {
	const [value, setValue] = useState('');

	return <input value={value} onChange={e => setValue(e.target.value)}/>
}

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
		cell: value => { console.log(value.row.id === '0' && value)}
	},
];
