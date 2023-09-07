import './App.css';
import { columns } from './components/ColumnDef';
import DataTable from './components/DataTable';
import data from './components/data.json'

function App() {
	return <DataTable columns={columns} data={data} />;
}

export default App;
