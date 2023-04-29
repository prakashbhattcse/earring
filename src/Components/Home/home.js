import React from 'react'
import { HeroWrapper, HeroContent, HeroTitle, HeroSubtitle, HeroButton, HeroImage, HeroImageContainer, AuthButtons, AuthButton } from "./homeStyles"
import { COLORS, FONTS, IMAGES, DEVICE } from "../../Constants/themes"


import ProductsList from '../ProductsList/ProductsList';
import Poster from '../Poster/Poster';
import Slider from '../Slider/Slider';
const home = () => {
  return (
    <>
      <HeroWrapper>
        <HeroContent>
          <HeroTitle>Stylish Earrings for Every Occasion</HeroTitle>
          <HeroSubtitle>Shop our latest collection of earrings</HeroSubtitle>
          <HeroButton>Shop Now</HeroButton>
        </HeroContent>
        
        <HeroImageContainer>
          <HeroImage src={IMAGES.earring} alt="Earrings" />
        </HeroImageContainer>
      </HeroWrapper>
      <Slider />
      <Poster />
      <ProductsList />
    </>
  )
}

export default home