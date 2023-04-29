import styled from "styled-components";
import { COLORS } from "../../Constants/themes";

export const Heading1 = styled.div`
font-size: 4rem;
text-align: center;
font-weight: 600;
padding: 1rem 0;
color:#FEB406;
/* color: ${COLORS.TextColor}; */
padding:${(props) => (props.active ? "0rem 0" : "1rem")} ;
`


export const SubHeading1 =styled.p`
font-size:1rem;
color: ${COLORS.TextColor};
width: 80%;
margin: 0 auto;
text-align: center;
padding: 1.5rem 0;
`