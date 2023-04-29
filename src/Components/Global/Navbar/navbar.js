import React from 'react';
import {Nav ,Container,Logo,Menu,MenuItem,AuthButtons,AuthButton} from "./navbarStyles"

const Navbar = () => {


    return (
      <Nav>
      <Container>
        <Logo>Panda</Logo>
        <Menu>
          <MenuItem>
            <a href="/">Home</a>
          </MenuItem>
          <MenuItem>
            <a href="about">About</a>
          </MenuItem>
          <MenuItem>
            <a href="contact">Contact</a>
          </MenuItem>
          <MenuItem>
            <a href="productdetailspage">Product Detail</a>
          </MenuItem>
        </Menu>

        <AuthButtons>
          <AuthButton>Login</AuthButton>
          <AuthButton>Sign Up</AuthButton>
        </AuthButtons>
      </Container>
    </Nav>
    )
  }


  export default Navbar;