const desktopMax = 1440,
  desktopMin = 1024,
  mobileMax = 1023,
  mobileMin = 320,
  tabletMin = 520;

const theme = {
  colors: {
    blue: "#1b0c69",
    purple: "#5d2ae5",
    teal: "#2cfef6",
    yellow: "#fffd38",
    pink: "#fc1781",
    green: "#41d3a2",
    lightBlue: "#90d4e7",
    orange: "#f2582c",
    lightOrange: "#ff9000",
    darkPink: "#b71178",
    lightPink: "#f9a7b5",
    gold: "#fdcd07",
    gray: "#264450",
    lightGray: "#b9b9b9",
    white: "#ffffff",
  },
  breakpoints: {
    desktopMax: `${desktopMax}px`,
    desktopMin: `${desktopMin}px`,
    mobileMax: `${mobileMax}px`,
    mobileMin: `${mobileMin}px`,
    tabletMin: `${tabletMin}px`,
  },
  spacing: {
    xsmall: `${8}px`,
    small: `${16}px`,
    medium: `${24}px`,
    large: `${32}px`,
    xlarge: `${64}px`,
  },
};

export default theme;
