import React from 'react';
import styled from 'styled-components';
import { ProductDetailsContainer, ProductDetailsContainerSecondary, ProductDescription, ProductTitle,ProductPrice,Subtitle, Quantity, AddToCartButton } from "./ProductDetailsStyles"

const ProductDetails = ({ title, price, description ,subtitle}) => {
    return (
        <ProductDetailsContainer>
            <ProductDetailsContainerSecondary>
                <ProductTitle>{title}</ProductTitle>
                <Subtitle>{subtitle}</Subtitle>
                <ProductPrice>{price}</ProductPrice>
                <ProductDescription>{description}</ProductDescription>

                <Quantity>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Quantity>
                <AddToCartButton>Add to Cart</AddToCartButton>
            </ProductDetailsContainerSecondary>
        </ProductDetailsContainer>
    );
};

export default ProductDetails;
