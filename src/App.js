import Sidebar from './components/Sidebar';
import './App.css';
import Dashboard from './components/Dashboard';

const App = () => {
	return (
		<div className="container">
			<Sidebar />
            <Dashboard />
		</div>
	);
};

export default App;
