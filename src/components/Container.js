import { Box } from "@chakra-ui/react";
import React from "react";

const Container = ({ children, ...props }) => {
  return (
    <Box px={{ base: "12", md: "32" }} {...props}>
      {children}
    </Box>
  );
};

export default Container;
