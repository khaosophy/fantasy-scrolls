import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevTools } from 'react-query/devtools';
import SpellTable from './components/SpellTable';
import SpellDescription from './components/SpellDescription';

function App() {
  /**
   * TODO:
   * - create filter/search controls (UI only; no logic yet)
   * - improved loading
   */
  return (
    <QueryClientProvider client={new QueryClient()}>
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
      {/* <ReactQueryDevTools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
