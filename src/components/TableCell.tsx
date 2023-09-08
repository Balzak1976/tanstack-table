import { useEffect, useState } from 'react';
import { Table, Row, Column, RowData } from '@tanstack/react-table';

declare module '@tanstack/react-table' {
	interface TableMeta<TData extends RowData> {
		updateData: (rowIndex: number, columnId: string, value: unknown) => void;
	}
}

interface TableCellProps<TData> {
	getValue: () => any;
	row: Row<TData>;
	column: Column<TData>;
	table: Table<TData>;
}

function TableCell<TData>({
	getValue,
	row,
	column,
	table,
}: TableCellProps<TData>) {
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
			style={{ width: '20px' }}
			value={value}
			onChange={e => setValue(e.target.value)}
			onBlur={onBlur}
		/>
	);
}

export default TableCell;
