import React from 'react';
import Cards from './Cards';

import { FeatureContainer, FeatureCard, Icon, Title, Description, FeatureContainerInner, FeatureCardRight, CarouselSection, CarouselSectionInner, HeroSection, GiftSection, GiftSectionLeft, GiftSectionRight, GiftSubTitle, GiftTitle, GiftSectionImg } from "./SliderStyles"
import { Heading1, SubHeading1 } from "../Global/GlobalStyles"
import { FaGem, FaMoneyBill, FaTruck, FaShieldAlt } from 'react-icons/fa';


const features = [{
    icon: <FaGem />,
    title: 'Quality Gems',
    description: 'High-quality gems from the best suppliers around the world.'
},
{
    icon: <FaMoneyBill />,
    title: 'Affordable Prices',
    description: 'Beautiful jewellery at affordable prices for everyone.',
},
{
    icon: <FaTruck />,
    title: 'Fast Shipping',
    description: 'Get your order quickly with our fast shipping options.',
},
{
    icon: <FaShieldAlt />,
    title: 'Secure Transactions',
    description: 'Secure transactions with the latest encryption technology.',
},
];


const Slider = () => {

    return (
        <>
            <HeroSection>

                <FeatureContainer>
                    <FeatureContainerInner>

                        {features.map((feature, index) => (
                            <FeatureCard key={index}>
                                <Icon>{feature.icon}</Icon>
                                <FeatureCardRight>
                                    <Title>{feature.title}</Title>
                                    <Description>{feature.description}</Description>
                                </FeatureCardRight>
                            </FeatureCard>
                        ))}
                    </FeatureContainerInner>
                </FeatureContainer>

                <CarouselSection>
                    <Heading1>Earring Categories</Heading1>
                    <SubHeading1>At our earring selling website, we have a diverse range of categories including classic studs, hoops, chandeliers, drops, ear cuffs, and ear jackets to cater to every style preference. From simple studs to statement chandeliers, we offer quality and affordable earrings for all occasions.</SubHeading1>
                    <CarouselSectionInner>
           
                        <Cards />
                    </CarouselSectionInner>
                </CarouselSection>
            </HeroSection>

            {/* <GiftSection>
                    <GiftSectionLeft>
                        <GiftTitle>Send a gift to someone you adore.</GiftTitle>
                        <GiftSubTitle>As people say, good things come in small packages.
                            <span>   Youchoose and welLwrap </span></GiftSubTitle>
                    </GiftSectionLeft>
                    <GiftSectionRight>
                        <GiftSectionImg src="https://i.pinimg.com/originals/42/9b/9a/429b9a0c5cfdb83ff574724cd912bd74.jpg" alt="" />
                    </GiftSectionRight>
                </GiftSection> */}

        </>
    )
}

export default Slider