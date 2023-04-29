import styled from "styled-components";
import { COLORS } from "../../Constants/themes";



export const ProductDetailsPageContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  flex-direction: row;
  padding: 2rem 0;
  /* height: 100vh;
  width: 100%;
  background-color: red; */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;


export const ProductDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  
  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const ProductTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const ProductDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;








export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;

export const GalleryContainerSecondary = styled.div`
width: 70%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const LargeImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .7rem 0;
  width: 100%;
  height: 30rem;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const LargeImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: red;
`;

export const SmallImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  gap: .7rem;
  padding: 0;
  overflow-x: auto;

  @media (max-width: 768px) {
    flex-basis: 100%;
    flex-direction: row;
    overflow-x: auto;
    gap: 0.5rem;
    padding: 0;
  }


`;

export const SmallImage = styled.img`
  width: auto;
  height: 100%;
  max-width: 124px;
  object-fit: cover;
  cursor: pointer;
  display: flex;
  flex-basis: 24%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;


export const Quantity = styled.select`
font-size: 1rem;
margin: 1rem 0;
padding: .5rem;
width: 5rem;
border-radius: 12px;
`;

export const AddToCartButton = styled.button`
font-size: 1.5rem;
font-weight: bold;
padding: 1rem;
border-radius: 5px;
border: none;
background-color: #4CAF50;
color: white;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
  background-color: #3e8e41;
}
`;


export const ProductDetailsContainerSecondary = styled.div`
width: 70%;
display: flex;
flex-direction: column;
`

export const Subtitle = styled.div`
font-size: 1rem;
color: grey;
`