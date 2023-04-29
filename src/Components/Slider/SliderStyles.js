import styled from "styled-components";
import { COLORS } from "../../Constants/themes";


export const CarouselSection = styled.div`
width: 100%;
background-color: ${COLORS.MattBlack};
height: ${(props) => (props.active ? "auto" : "70vh")};
/* padding: 1rem 0; */
padding: ${(props) => (props.active ? "1rem 0" : "0")};
`

export const CarouselSectionInner = styled.div`
width: 100%;
height: auto;
margin: 0 auto;
padding: 2rem 0;
position: relative;

  .carousel-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      margin: 0 auto;
      position:unset;

.react-multiple-carousel__arrow {
    position:absolute;
}

.react-multiple-carousel__arrow--left {
    left: calc(1% + 1px)
}

.react-multiple-carousel__arrow--right {
    right: calc(1% + 1px)
}
    }
`
  ;
export const CardWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 11rem;
height: 12.5rem;
border-radius: 1rem;
background-color:white;
margin: 0 auto;
padding: 15px;
gap: 1rem;
`;


export const CardImgWrapepr = styled.div`
width: 100%;
height: 10rem;
background-color: red;
border-radius: 1.4rem;
`


export const CardImg = styled.img`
width:100%;
height:100%;
object-fit: cover;
border-radius: 1.4rem;
`

export const CardTitle = styled.p`
font-size: 1.2rem;
  margin: 0;
  display: flex;
  align-items:center;
  justify-content:center;
  width: 100%;
`

export const CardSubTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
`


export const HeroSection = styled.div`
width: 100%;
height: 100vh;
background-color: ${COLORS.MattBlack};
`

export const GiftSection = styled.div`
width: 100%;
height: 44.7vh;
background-color: red;
display: flex;
align-items: center;
justify-content: space-between;
background-color: ${COLORS.MattBlackSecondary};
`

export const GiftSectionLeft = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: start;
flex-direction: column;
justify-content: center;
padding: 0 4rem;
`

export const GiftSectionRight = styled.div`
height: 100%;
width: 50%;
`
export const GiftSectionImg = styled.img`
width: 100%;
height:100%;
`


export const GiftTitle = styled.p`
font-size: 2.5rem;
color: ${COLORS.TextColor};
`

export const GiftSubTitle = styled.p`
font-size: 1rem;
color: ${COLORS.TextColor};

span{
  display: block;
  padding-top: 1rem;
}
`


export const FeatureContainer = styled.div`
width: 100%;
height: 30vh;
/* background: #FEB406; */
background: grey;
/* background-color: ${COLORS.PrimaryLight}; */
display: flex;
align-items:center;
`;

export const FeatureContainerInner = styled.div`
width: 90%;
margin: 0 auto;
display: flex;
align-items:center;
flex-wrap: wrap;
justify-content: space-between;
`

export const FeatureCard = styled.div`
width: 280px;
height: 150px;
/* padding: 20px; */
display: flex;
align-items: center;
justify-content: space-between;
transition: all 0.3s ease-in-out;
gap:1rem;

`;

export const Icon = styled.div`
font-size: 5rem;
color:${COLORS.TextColor};
display: flex;
align-items: center;
`;

export const Title = styled.div`
font-size: 1.2rem;
font-weight: 600;
margin-bottom: 10px;

`;

export const Description = styled.div`
font-size: 1rem;
text-align: center;
`;


export const FeatureCardRight = styled.div`
display: flex;
align-itmes:center;
justify-content:center;
flex-direction:column;
text-align:center;
`