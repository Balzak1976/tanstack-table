import './tanstack.css'
import { useState } from 'react'
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';

import  defaultData  from './data.json';

type Student = {
	Application_No: number;
	Name: string;
	Father_Name: string;
	DOB: string;
};

const columnHelper = createColumnHelper<Student>();

const columns = [
	columnHelper.accessor('Application_No', {
		header: 'Registration No',
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor('Name', {
		header: 'Name',
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor('Father_Name', {
		header: 'Father Name',
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor('DOB', {
		header: 'Date of Birth',
		cell: (info) => info.getValue(),
	}),
];

function Table() {
	const [data] = useState<Student[]>(defaultData);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

  return (
    <table>
      <thead>
        {
          table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {
                    header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())
                  }
              </th>
              ))}
            </tr>
          ))
        }
      </thead>
      <tbody>
        {
          table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {
                row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    }
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Table;