import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { db } from './firebase';
import Header from './Components/Header';
import Cart from './Views/Cart';
import Home from './Views/Home';
import styled from 'styled-components';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        products: doc.data(),
      }));
      setCartItems(tempItems);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <Router>
      <Container>
        <Header />

        <Switch>
          <Route path='/cart'>
            <Cart cartItems={cartItems} />
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
