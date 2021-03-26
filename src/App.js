import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Cart from './Views/Cart';
import Home from './Views/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />

        <Switch>
          <Route path='/cart'>
            <Cart />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
