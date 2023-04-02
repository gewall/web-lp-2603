import {
  Box,
  Center,
  Heading,
  HStack,
  IconButton,
  Icon,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Container from "./Container";
import {
  AiOutlineFacebook,
  AiOutlineGoogle,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Box py={8} mt={8} bg={"orange.200"}>
      <Container>
        <VStack spacing={4}>
          <Center>
            <Heading size={"lg"}>
              Hubungi{" "}
              <Heading as={"span"} color={"orange.300"}>
                Kami
              </Heading>
            </Heading>
          </Center>
          <HStack spacing={4}>
            <IconButton
              size={"sm"}
              variant="outline"
              colorScheme="orange"
              aria-label="Send facebook"
              icon={<Icon as={AiOutlineFacebook} fontSize={24} />}
            />
            <IconButton
              size={"sm"}
              variant="outline"
              colorScheme="orange"
              aria-label="Send instagram"
              icon={<Icon as={AiOutlineInstagram} fontSize={24} />}
            />
            <IconButton
              size={"sm"}
              variant="outline"
              colorScheme="orange"
              aria-label="Send email"
              icon={<Icon as={AiOutlineGoogle} fontSize={24} />}
            />
            <IconButton
              size={"sm"}
              variant="outline"
              colorScheme="orange"
              aria-label="Send whatsapp"
              icon={<Icon as={AiOutlineWhatsApp} fontSize={24} />}
            />
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
