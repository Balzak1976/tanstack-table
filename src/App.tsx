import './App.css';
import { columns } from './components/ColumnDef';
import DataTable from './components/DataTable';
import data from './components/data.json'

function App() {
	return <DataTable  data={data} columns={columns} />;
}

export default App;
