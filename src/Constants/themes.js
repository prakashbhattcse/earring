import world_map from "../Assets/Images/world_map.png"
import earring from "../Assets/Images/earring.jpg";
import poster from "../Assets/Images/poster.png";

export const COLORS = {
    PrimaryDark: "#1A1A1A",
    PrimaryLight: "#F39200",
    SecondaryLight: "#41DDB8",
    TextColor: "#FFFFFF",
    MattBlack:"#28282B",
    TextColorSecondary:"#F0F6FF",
    // MattBlackPrimary:"#2A2B30",
    MattBlackSecondary:"#2D2E33",
    MattBlackDark: "#131821",
    Green:"#00C671"
  };
  export const FONTS = {
    Monster: "'Montserrat', sans-serif",
    Carzy: "'Pangolin', cursive",
    Robo: "'Roboto', sans-serif",
    Ubuntu: "'Ubuntu', sans-serif",
    Noto_Sans:" 'Noto Sans', sans-serif"
  };
  export const SIZE = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "480px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
    xs: "6px",
    s: "11px",
    l:"16px",
  };
  export const DEVICE = {
    mobileS: `(max-width: ${SIZE.mobileS})`,
    mobileM: `(max-width: ${SIZE.mobileM})`,
    mobileL: `(max-width: ${SIZE.mobileL})`,
    tablet: `(max-width: ${SIZE.tablet})`,
    laptop: `(max-width: ${SIZE.laptop})`,
    laptopL: `(max-width: ${SIZE.laptopL})`,
    desktop: `(max-width: ${SIZE.desktop})`,
    desktopL: `(max-width: ${SIZE.desktop})`,
  };
  
  export const IMAGES = {
    world_map,
    earring,
    poster
  };
  