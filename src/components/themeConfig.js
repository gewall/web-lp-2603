import { extendTheme } from "@chakra-ui/react";
import { Raleway } from "next/font/google";

const RalewayF = Raleway({
  weight: ["400"],
  subsets: ["latin"],
});

const theme = extendTheme({
  config: { initialColorMode: "light", useSystemColorMode: false },
  fonts: {
    body: RalewayF.style.fontFamily,
    heading: RalewayF.style.fontFamily,
  },
});

export default theme;
