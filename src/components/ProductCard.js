import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Center, Heading, Text, VStack, Link } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import React, { Fragment } from "react";

const ProductCard = ({ item }) => {
  return (
    <Box
      // p={4}
      _hover={{
        shadow: "xl",
      }}
      shadow={"none"}
      transition={"all .3s ease-in-out"}
      maxW={{ base: "full", md: "xs" }}
      border={"1px solid"}
      borderColor={"gray.100"}
      rounded={"md"}
      // bg={"blackAlpha.50"}
    >
      <VStack spacing={4} overflow={"hidden"}>
        <Center position={"relative"} w={"3xs"} h={"3xs"}>
          <NextImage
            // as={NextImage}
            src={item.url}
            alt={"head picture"}
            fill
            style={{ objectFit: "cover" }}
            // borderRadius={"full"}
            // objectFit={"cover"}
            // width={{ base: 150, md: 250 }}
            // height={{ base: 150, md: 250 }}
            // style={{ width: 150, height: 150 }}
          />
        </Center>
        <VStack alignItems={"flex-start"} w={"full"} px={4} spacing={1}>
          <Box>
            <Heading size={"md"} fontWeight={"medium"}>
              {item.name}{" "}
            </Heading>
          </Box>
          <Box>
            <Text fontStyle={"italic"} fontSize={"sm"}>
              {Intl.NumberFormat("id-ID", {
                currency: "IDR",
                style: "currency",
              }).format(parseInt(item.harga[0].harga)) +
                " / " +
                item.harga[0].unit +
                ` (${item.harga[0].type})`}
            </Text>
          </Box>
          <VStack spacing={0} alignItems={"start"}>
            <Link as={NextLink} href={`/produk/${item.id}`}>
              Lihat Produk
            </Link>
            <Link
              color={"orange.300"}
              target={"_blank"}
              href={`https://wa.me/+6285794219715?text=Hai,%20Saya%20ingin%20memesan%20produk%20${item.name}%20url:`}
            >
              Pesan Sekarang
              <ChevronRightIcon />
            </Link>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default ProductCard;
