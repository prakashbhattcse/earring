import React, { useState } from "react";
import styled from "styled-components";
import { CardWrapper, CardImgWrapepr, CardImg, CardTitle, CardSubTitle } from "./SliderStyles"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";





const ProductList = [
    {
        id: 1,
        name: "Product 1",
        price: "$19.99",
        image: "https://i.pinimg.com/236x/be/da/b7/bedab79701db327828a25de04e852667.jpg",
    },
    {
        id: 2,
        name: "Product 2",
        price: "$29.99",
        image: "https://i.pinimg.com/236x/03/ee/af/03eeaf416465f7a176f126399d69b164.jpg",
    },
    {
        id: 3,
        name: "Product 3",
        price: "$39.99",
        image: "https://i.pinimg.com/236x/a8/9b/c5/a89bc5000a19e349ef1639c3fc71db75.jpg",
    },
    {
        id: 4,
        name: "Product 4",
        price: "$49.99",
        image: "https://i.pinimg.com/564x/9f/16/59/9f16593372cf65fa41b010f37edecaee.jpg",
    },
    {
        id: 5,
        name: "Product 5",
        price: "$49.99",
        image: "https://i.pinimg.com/474x/09/b7/8f/09b78f490f6e6f54626bd020c0a8a49c.jpg",
    },
    {
        id: 6,
        name: "Product 6",
        price: "$49.99",
        image: "https://i.pinimg.com/474x/9e/08/a4/9e08a427c1a9009e7f1a31fe47cb91cb.jpg",
    },
    {
        id: 7,
        name: "Product 7",
        price: "$49.99",
        image: "https://i.pinimg.com/236x/e4/fe/2c/e4fe2c1bb71d4ebd852945dccfd3a819.jpg",
    },
    {
        id: 8,
        name: "Product 8",
        price: "$49.99",
        image: "https://i.pinimg.com/236x/a8/9b/c5/a89bc5000a19e349ef1639c3fc71db75.jpg",
    },
    {
        id: 9,
        name: "Product 9",
        price: "$49.99",
        image: "https://i.pinimg.com/236x/b8/c3/7f/b8c37fd1f20fc52d32c5b1dd5fc43324.jpg",
    },
];




const Cards = () => {


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 2,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 3,
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
            slidesToSlide: 1,
        }
    };



    return (
        <>
            <Carousel containerClass="carousel-container"
                responsive={responsive}>
                {ProductList.map((product) => (
                    <CardWrapper key={product.id}  >
                        <CardImgWrapepr>
                            <CardImg src={product.image} alt={product.name} ></CardImg>
                            {/* <img src={product.image} alt={product.name}></img> */}
                        </CardImgWrapepr>
                        <CardTitle>{product.name}</CardTitle>
                        {/* <CardSubTitle>{product.price}</CardSubTitle> */}
                    </CardWrapper>

                ))}
            </Carousel>
        </>
    )
}








export default Cards;