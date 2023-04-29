import React, { useState } from 'react';
import styled from 'styled-components';
import { GalleryContainer, GalleryContainerSecondary, LargeImageContainer, LargeImage, SmallImageContainer,SmallImage } from './ProductDetailsStyles';


const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <GalleryContainer>
      <GalleryContainerSecondary>

        <LargeImageContainer>
          <LargeImage src={selectedImage} alt="Product" />
        </LargeImageContainer>
        <SmallImageContainer>
          {images.map((image, index) => (
            <SmallImage
              key={index}
              src={image}
              alt={`Product ${index}`}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </SmallImageContainer>
      </GalleryContainerSecondary>
    </GalleryContainer>
  );
};

export default ProductGallery;