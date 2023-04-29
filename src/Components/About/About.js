// import React from 'react'
// import { AboutWrapper, AboutTitle, AboutText } from "./AboutStyles";
// import {FeatureCard,Icon,Title,Description,Button,Section} from "./AboutStyles"

// const About = () => {
//   return (
//     <AboutWrapper>
//       <AboutTitle>About Us</AboutTitle>
//       <AboutText>
//         At our earring selling website, we believe that accessorizing is an art form. That's why we offer a curated collection of unique, handcrafted earrings from around the world. Our earrings are designed to make a statement and express your individual style.
//       </AboutText>
//       <AboutText>
//         We work directly with artisans to bring you high-quality, one-of-a-kind pieces that you won't find anywhere else. Each pair of earrings is carefully selected and inspected to ensure that it meets our standards of excellence. We believe that everyone should have access to beautiful, ethically made jewelry, and we're committed to providing our customers with a positive shopping experience.
//       </AboutText>
//       <AboutText>
//         Thank you for choosing our earring selling website. We look forward to helping you find the perfect pair of earrings to complement your unique style.
//       </AboutText>
//     </AboutWrapper>




//   )
// }

// export default About;

import React, { useState } from "react";
import styled from "styled-components";

const ProductList = [
  {
    id: 1,
    name: "Product 1",
    description: "Description 1",
    price: 10.0,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description 2",
    price: 20.0,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description 3",
    price: 30.0,
  },
];

const Card = ({ product, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <ProductImage src="https://picsum.photos/200/300" />
      <ProductInfoContainer>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>${product.price}</ProductPrice>
      </ProductInfoContainer>
    </CardContainer>
  );
};

const ProductDetailsPage = ({ product, onBackButtonClick }) => {
  return (
    <ProductDetailsContainer>
      <ProductImage src="https://picsum.photos/100/100" />
      <ProductInfoContainer>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>${product.price}</ProductPrice>
        <BackButton onClick={onBackButtonClick}>Back</BackButton>
      </ProductInfoContainer>
    </ProductDetailsContainer>
  );
};

const ProductListPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackButtonClick = () => {
    setSelectedProduct(null);
  };

  const renderProductList = () => {
    return ProductList.map((product) => (
      <Card
        key={product.id}
        product={product}
        onClick={() => handleCardClick(product)}
      />
    ));
  };

  return (
    <>
      {selectedProduct ? (
        <ProductDetailsPage
          product={selectedProduct}
          onBackButtonClick={handleBackButtonClick}
        />
      ) : (
        <CardListContainer>{renderProductList()}</CardListContainer>
      )}
    </>
  );
};

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px auto;
  max-width: 1200px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 500px;
  margin: 20px;
  padding: 20px;
  background-color: #f2f2f2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 10px;
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30%;
`;
const ProductName = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin: 10px 0;
`;

const ProductPrice = styled.h3`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin: 10px 0;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 10px 0;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  margin: 20px auto;
  background-color: #5cb85c;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #449d44;
  }
`;

const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export default ProductListPage;