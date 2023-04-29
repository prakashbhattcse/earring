import React from "react";
import {
  FooterBottom,
  FooterLoc,
  FooterLogo,
  FooterLogoCon,
  FooterLogoName,
  FooterMenu,
  FooterMenuCon,
  FooterMenuConact,
  FooterMenuPrivacy,
  FooterMenuTitle,
  FooterMenuUl,
  FooterSec,
  FooterTop,
} from "./FooterStyles";


const Footer = () => {
  return (
    <FooterSec>
      <FooterTop>
       
        <FooterMenuCon>

        <FooterLogoCon>
          {/* <FooterLogo alt="" src={IMAGES.BigLogo} /> */}
          <FooterLogoName>
            <span>Earring</span>
            {/* <OrangeTxt>sarthi</OrangeTxt> */}
          </FooterLogoName>
          <FooterLoc>IND</FooterLoc>
        </FooterLogoCon>

          <FooterMenu>
            <FooterMenuTitle>Contact</FooterMenuTitle>
            <FooterMenuConact>
              <span>Call :123456789</span>
              <span>hellomoto@earrings.com</span>
            </FooterMenuConact>
          </FooterMenu>

          <FooterMenu>
            <FooterMenuTitle>Useful Links</FooterMenuTitle>
            <FooterMenuUl>
              <li>About Us</li>
              <li>Join Us</li>
              <li>Career</li>
              <li>Services</li>
              <li>Privacy Policy</li>
            </FooterMenuUl>
          </FooterMenu>

          <FooterMenu>
            <FooterMenuTitle>Pay Safely With Us</FooterMenuTitle>
            <FooterMenuPrivacy>
              <span>
                Get best service Lorem Ipsum is simply dummy text of the
                printing and type Aliquip exa consequat dui aut repahend vouptate elit cilum fugiat pariatur lorem dolor cit amet consecter adipisic elit sea vena eiusmod nulla
              </span>
            </FooterMenuPrivacy>
          </FooterMenu>

        </FooterMenuCon>
      </FooterTop>
      <FooterBottom>
        <p>Copyright © Earring.</p>
      </FooterBottom>
    </FooterSec>
  );
};

export default Footer;
