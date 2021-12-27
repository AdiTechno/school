
import './App.css';
import Dashboard from './Component/dashboard/Dashboard';
import Topbar from './Component/dashboard/Topbar';
import Sidebar from './Component/sidebar/Sidebar';

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Dashboard/>
      </div>
      
    </div>
  );
}

export default App;
