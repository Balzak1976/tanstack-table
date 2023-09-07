import { ColumnDef } from '@tanstack/react-table';

export type Student = {
	Application_No: number;
	Name: string;
	Father_Name: string;
	DOB: string;
};

export const columns: ColumnDef<Student>[] = [
	{
		accessorKey: 'Application_No',
		header: 'Application_No',
	},
	{
		accessorKey: 'Name',
		header: 'Name',
	},
	{
		accessorKey: 'Father_Name',
		header: 'Father_Name',
	},
	{
		accessorKey: 'DOB',
		header: 'DOB',
	},
];
