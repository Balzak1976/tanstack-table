import { useEffect, useState } from 'react';

export const TableCell = ({ getValue, row, column, table }) => {
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
			name={column.id}
			style={{ width: '20px' }}
			value={value}
			onChange={e => setValue(e.target.value)}
			onBlur={onBlur}
		/>
	);
};
