import React from 'react';
import styled from 'styled-components';

const Product = () => {
  return (
    <Container>
      <Title>Title</Title>

      <Price>$499</Price>

      <Rating>⭐⭐⭐⭐⭐</Rating>

      <Image src='https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX342_.jpg' />

      <ActionSection>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  background-color: white;
  z-index: 100;
  flex: 1;
  padding: 20px;
  margin: 10px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span``;

const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;

const Rating = styled.div``;

const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;

const ActionSection = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
`;

const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
`;
