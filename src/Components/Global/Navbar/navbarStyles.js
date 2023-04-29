import styled from "styled-components";

export const Nav = styled.nav`
  background-color: black;
  color: #fff;
  width: 100%;
  height: 10vh;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
/* max-width: 960px; */
/* margin: 0 auto; */
padding: 1rem;
`;

export const Logo = styled.h1`
font-size: 1.5rem;
margin: 0;
`;


export const Menu = styled.ul`
display: flex;
gap: 3rem;
list-style: none;
margin: 0;
padding: 0;
`;


export const MenuItem = styled.li`
margin: 0 1rem;

& a {
  color: #fff;
  text-decoration: none;
}
`;
 

export const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const AuthButton = styled.button`
  background-color: #333;
  color: #FFF;
  font-size: .8rem;
  font-weight: 600;
  padding: .6rem 1.2rem;
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