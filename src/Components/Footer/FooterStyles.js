import styled from "styled-components";
import { COLORS, FONTS, IMAGES, DEVICE } from "../../Constants/themes"

export const FooterSec = styled.div`
  height: 20rem;
  width: 100%;
`;
export const FooterTop = styled.div`
  background-color: ${COLORS.MattBlack};
  padding: 20px;
  height: 100%;
  padding: 50px 25px;
  text-align: left;
  display: flex;
  align-items: center;
  background-image: url(${IMAGES.world_map});
`;
export const FooterLogoCon = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;
export const FooterLogoName = styled.div`
  color: ${COLORS.TextColor};
  font-size: 2rem;

`;
export const FooterLoc = styled.div`
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.TextColor};
  background: #333333;
  width: 60px;
  font-size: 1.2rem;
`;
export const FooterLogo = styled.img`
  border-radius: 5px;
  width: 50px;
  height: 50px;
  object-fit: content;
`;

export const FooterMenuCon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;


@media ${DEVICE.laptop} {
  gap: 1rem;
  justify-content: space-between;
}

@media ${DEVICE.tablet} {
gap: 2rem;
}

@media ${DEVICE.mobileL} {
  gap: 2rem;
  justify-content: center;
}

@media ${DEVICE.mobileM} {
  justify-content: center;
}

@media ${DEVICE.mobileS} {
  justify-content: center;
}
`;
export const FooterMenu = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: 300px;
  color: ${COLORS.TextColor};
`;
export const FooterMenuTitle = styled.h2`
  font-family: ${FONTS.Noto_Sans};
  text-align: left;
  font-size: 1.3rem;




`;
export const FooterMenuConact = styled.div`
  font-family: ${FONTS.Monster};
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
`;
export const FooterMenuUl = styled.ul`
  font-family: ${FONTS.Monster};
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  list-style: none;
`;
export const FooterMenuPrivacy = styled.div`
  font-family: ${FONTS.Monster};
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
  font-size: .9rem;
`;
export const FooterBottom = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${COLORS.MattBlack};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.TextColor};
  font-family: ${FONTS.Noto_Sans};
  font-weight: 500;
  border-top: 1px solid rgba(255,255,255,0.1)
`;
