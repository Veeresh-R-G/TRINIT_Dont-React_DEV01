
import './App.css';
import CompHandler from './CompHandler';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Button from './elements/Button';
import Nav from './elements/Nav';
import Para from './elements/Para';
import Header from './elements/Header';
import Table from './elements/Table';
import Home from './Home'
import TextArea from './elements/TextArea';
function App() {
  return (
    <Router>
      <div className="App">
        <div className='content m-0 p-0'>

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/compo'>
              <CompHandler />
            </Route>
            <Route exact path='/ta'>
              <TextArea />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

{/* <div className="App">
      <CompHandler />
    </div> */}