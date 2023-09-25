import { createColumnHelper } from '@tanstack/react-table';
import { TableCell } from './TableCell';

export type GoodsTable = {
	name: string;
	qty: number;
	price: number;
	total: number;
	discount: number;
	stocks: number;
};

const columnHelper = createColumnHelper<GoodsTable>();
console.log('columnHelper: ', columnHelper);


export const columns = [
	columnHelper.accessor('name', {
		header: 'Название',
	}),
	
	columnHelper.accessor('qty', {
		header: 'Кол-во',
		cell: TableCell,
	}),
	
	columnHelper.accessor('price', {
		header: 'Цена',
		cell: value => {
			// console.log(value);
			return value.getValue();
		},
	}),
	
	columnHelper.accessor(row => {
		console.log('row: ', row);

		return row.qty * row.price
	}, {
		header: 'Итог',
	}),

	columnHelper.display({
		id: 'discount',
		header: 'Скидка',
	}),
	columnHelper.accessor('stocks', {
		header: 'Склад',
	}),
];
