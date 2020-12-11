import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SpellTable from './components/SpellTable';
import SpellDescription from './components/SpellDescription';

function App() {
  /*<div className="App" style={{ maxWidth: '800px', margin: 'auto' }}>
      <SpellTable />
    </div> */
  return (
    <Router>
      <div style={{ maxWidth: '800px', margin: 'auto' }}>
        <Switch>
          <Route path="/spells/:key">
            <SpellDescription />
          </Route>
          <Route path="/spells">
            <SpellTable />
          </Route>
          <Route path="/">
            <SpellTable />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
