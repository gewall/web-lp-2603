import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" property="og:title" content={title} />
        <meta name="twitter:card" content={title} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Box pt={"20"}>{children}</Box>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
