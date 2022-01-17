
import './App.css';
import Dashboard from './Component/dashboard/Dashboard';
import Topbar from './Component/dashboard/Topbar';
import Footer from './Component/dashboard/Footer';
import Sidebar from './Component/sidebar/Sidebar';
import Ragistration from './Component/ragistration/Ragistration'
import RagistrationEntry from './Component/ragistration/RegistrationEntry'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
      
      <div className="App">
      <Router>
        <Topbar/>
        <Sidebar/>
          <Switch>
            <Route path="/registration">
              <Ragistration />
            </Route> 
            <Route path="/newregistration">
              <RagistrationEntry />
            </Route> 
            <Route exact path="/">
              <Dashboard/>
            </Route>
          </Switch>
          
        </Router>
        
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
