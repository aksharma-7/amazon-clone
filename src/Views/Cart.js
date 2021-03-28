import React from 'react';
import styled from 'styled-components';
import CartItems from '../Components/CartItems';
import CartTotal from '../Components/CartTotal';

const Cart = ({ cartItems }) => {
  return (
    <Container>
      <CartItems cartItems={cartItems} />
      <CartTotal />
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  display: flex;
  padding: 14px 18px 0 18px;
`;
