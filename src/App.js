import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { auth, db } from './firebase';
import Header from './Components/Header';
import Cart from './Views/Cart';
import Home from './Views/Home';
import styled from 'styled-components';
import Login from './Views/Login';

function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setCartItems(tempItems);
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  console.log(user);

  return (
    <Router>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <Container>
          <Header user={user} signOut={signOut} cartItems={cartItems} />

          <Switch>
            <Route path='/cart'>
              <Cart cartItems={cartItems} />
            </Route>

            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Container>
      )}
    </Router>
  );
}

export default App;

const Container = styled.div``;
