import styled from "styled-components";
import { COLORS, FONTS, IMAGES, DEVICE } from "../../Constants/themes";

export const PosterLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap:1rem;
    width: 100%;
    height: 40vh;
    background-image: url(${IMAGES.poster});
    background-size: cover;
    background-position: center;
  `


export const PosterButton = styled.button`
font-size: 14px;
font-weight: 600;
padding: 15px 35px;
color: #000;
background-color: #fff;
border-radius: 4px;
cursor: pointer;
border: none;
outline: none;
transition: 0.2s;
margin-top:1rem;
`
