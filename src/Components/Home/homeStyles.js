import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: #F8F8F8; */
  background-color: #000000;
  /* padding: 100px 0; */
  width: 100%;
  height: 90vh;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 50%;
 justify-content: center;
 padding: 2rem;
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  /* color: #333; */
  color: white;
  margin-bottom: 2rem;
`;

export const HeroSubtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: #666;
  margin-bottom: 3rem;
`;

export const HeroButton = styled.button`
  background-color: #333;
  color: #FFF;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #444;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.3);
  }
`;

export const HeroImage = styled.img`
background-size:contain;
background-size: contain;
  max-width: 800px;
  height: auto;
`;

export const HeroImageContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

