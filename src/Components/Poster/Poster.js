import React from 'react'
import {PosterLayout,PosterButton} from "./PosterStyles"
import { Heading1 } from '../Global/GlobalStyles'
import { Heading2 } from '../ProductsList/ProductsListStyles'

const Poster = () => {
    return (
        <>
            <PosterLayout>
                <Heading1 active={true}>Jeweled Delight</Heading1>
                <Heading2> <span></span>Discover our exquisite collection of stunning earrings</Heading2>
                <PosterButton>Explore More</PosterButton>
            </PosterLayout>
        </>
    )
}

export default Poster