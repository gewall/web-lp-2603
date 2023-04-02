import Container from "@/components/Container";
import NextImage from "next/image";
import Layout from "@/components/Layout";
import { getProducts } from "@/libs/api/products";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  useNumberInput,
  VStack,
} from "@chakra-ui/react";
import React, { Fragment, useState } from "react";

import { ChevronRightIcon } from "@chakra-ui/icons";

export const getStaticPaths = async () => {
  const products = await getProducts();

  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await getProducts();

  const product = res.find((a) => {
    if (a.id === params.id) {
      return a;
    }
  });
  return {
    props: {
      product,
    },
  };
};

const ProdukDetail = ({ product }) => {
  const [variant, setVariant] = useState("Lokal");
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      // max: 6,
      precision: 2,
    });

  const getHarga = () => {
    const _harga = product.harga.find((a) => a.type === variant);
    return { harga: _harga.harga, unit: _harga.unit };
  };

  return (
    <Container>
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        spacing={8}
        justify={"space-between"}
      >
        <VStack spacing={4} alignItems={"flex-start"}>
          <Box>
            <Heading size={"md"}>{product.name}</Heading>
          </Box>
          <ButtonGroup>
            {product.harga.map((item, i) => (
              <Fragment key={i}>
                <Button
                  colorScheme={"orange"}
                  variant={variant === item.type ? "outline" : "ghost"}
                  onClick={() => {
                    setVariant(item.type);
                  }}
                >
                  {item.type}
                </Button>
              </Fragment>
            ))}
          </ButtonGroup>
          <HStack>
            <Button {...getDecrementButtonProps()}>-</Button>
            <Input {...getInputProps()} />
            <Button {...getIncrementButtonProps()}>+</Button>
          </HStack>
          <HStack>
            <Heading size={"sm"}>
              Total :{" "}
              <Heading as={"span"} size={"sm"} fontWeight={"light"}>
                {Intl.NumberFormat("id-ID", {
                  currency: "IDR",
                  style: "currency",
                }).format(parseInt(getHarga().harga * getInputProps().value)) +
                  ` / ${getHarga().unit}`}
              </Heading>
            </Heading>
          </HStack>
          <Box>
            <Button
              as={"a"}
              colorScheme={"orange"}
              // color={"orange.300"}
              target={"_blank"}
              href={`https://wa.me/+6285794219715?text=Hai,%20Saya%20ingin%20memesan%20produk%20${
                product.name
              }%20sebanyak ${Math.ceil(
                getInputProps().value
              )} dengan harga ${Intl.NumberFormat("id-ID", {
                currency: "IDR",
                style: "currency",
              }).format(parseInt(getHarga().harga * getInputProps().value))}`}
            >
              Pesan Sekarang
            </Button>
          </Box>
        </VStack>
        <Box overflow={"hidden"}>
          <Box position={"relative"} w={"sm"} h={"sm"}>
            <NextImage
              alt={product.name}
              src={product.url}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

ProdukDetail.getLayout = function getLayout(page) {
  // console.log(page.product);
  return (
    <Layout title={"Produk"} description={"Produk teh ponda"}>
      {page}
    </Layout>
  );
};

export default ProdukDetail;
