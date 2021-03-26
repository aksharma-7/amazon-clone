import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Cart from './Views/Cart';
import Home from './Views/Home';
import styled from 'styled-components';

function App() {
  return (
    <Router>
      <Container>
        <Header />

        <Switch>
          <Route path='/cart'>
            <Cart />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div``;
