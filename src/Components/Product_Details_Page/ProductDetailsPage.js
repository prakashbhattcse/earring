import React from 'react'
import { ProductDetailsPageContainer,Quantity } from "./ProductDetailsStyles";
import ProductDetails from './ProductDetails.js';
import ProductGallery from './ProductGallery';

const ProductDetailsPage = () => {

    const product = {
        images: [
            'https://images.meesho.com/images/products/106401389/7bteb_512.jpg',
            'https://m.media-amazon.com/images/I/91Lu9oaofwL._UY535_.jpg',
            'https://www.smilesnsparkles.co.in/wp-content/uploads/2021/07/OER0107.jpg',
            'https://assets.ajio.com/medias/sys_master/root/20210813/Gkoi/61163d19f997ddce899dc9df/-1117Wx1400H-462783097-silver-MODEL4.jpg'
        ],
        title: 'YouBella',
        subtitle:'Pack Of 4 silver-Toned Contemporary Studs Earrings',
        price: '₹400',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac sapien lectus. Mauris in mauris eget nulla commodo bibendum at at libero. Donec quis ligula sed mi elementum tristique. Proin interdum fringilla enim a ultrices.',
    };

    return (
        <>
            <ProductDetailsPageContainer>
                <ProductGallery images={product.images} />
                <ProductDetails
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    subtitle={product.subtitle}
                />

            </ProductDetailsPageContainer>
        </>
    )
}

export default ProductDetailsPage;