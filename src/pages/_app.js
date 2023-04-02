import theme from "@/components/themeConfig";
import MainContextProvider from "@/libs/contexts/MainContext";
import "@/styles/globals.css";
import "swiper/swiper.min.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ChakraProvider theme={theme}>
      <MainContextProvider>
        {getLayout(<Component {...pageProps} />)}
      </MainContextProvider>
    </ChakraProvider>
  );
}
``;

