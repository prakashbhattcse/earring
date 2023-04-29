import styled from "styled-components";


export const AboutWrapper = styled.div`
box-sizing: border-box;
  background-color: #000000;
  /* background-color: #1E1E1E; */
  color: white;
  width: 100vw;
  height: 90vh;
  padding:80px ;
  /* width: 100%;
  height: 90vh; */
`;

export const AboutTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  margin: 0;
`;

export const AboutText = styled.p`
  font-size: 24px;
  line-height: 1.6;
  margin-bottom: 40px;
  text-align: center;
`;



export const FeatureCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
border-radius: 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
padding: 16px;
margin: 16px;
width: 300px;
`;

export const Icon = styled.img`
height: 64px;
width: 64px;
`;

export const Title = styled.h3`
font-size: 24px;
margin-top: 16px;
`;

export const Description = styled.p`
font-size: 16px;
margin-top: 8px;
text-align: center;
`;

export const Button = styled.button`
background-color: #ffcc00;
border: none;
border-radius: 4px;
color: white;
font-size: 16px;
font-weight: bold;
margin-top: 16px;
padding: 8px 16px;
`;

