import React from 'react'
import Cards from '../Slider/Cards';
import { CarouselSection, CarouselSectionInner } from "../Slider/SliderStyles"
import { LatestProductLayout, Heading2,LatestProductInner } from "./ProductsListStyles"
import { Heading1, SubHeading1 } from "../Global/GlobalStyles"
import { COLORS, IMAGES } from "../../Assets/Images/poster.png";


const ProductsList = () => {
    return (
        <>
            <LatestProductLayout>
                {/* <LatestProductInner> */}
                    <CarouselSection active={true}>
                        <Heading2>Trending Products</Heading2>
                        <CarouselSectionInner>
                            <Cards />
                        </CarouselSectionInner>
                    </CarouselSection>


                    <CarouselSection active={true}>
                        <Heading2>Latest Products</Heading2>
                        <CarouselSectionInner>
                            <Cards />
                        </CarouselSectionInner>
                    </CarouselSection>
                {/* </LatestProductInner> */}

            </LatestProductLayout>

            {/* <TrendingProductLayout>
                <TrendingProductInner>
                </TrendingProductInner>
            </TrendingProductLayout> */}
        </>
    )
}

export default ProductsList