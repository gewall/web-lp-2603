import Container from "@/components/Container";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/libs/api/products";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  FormControl,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import React, { Fragment, useEffect, useState } from "react";

export const getStaticProps = async () => {
  const products = await getProducts();
  return {
    props: { products: products || null },
  };
};

const Produk = ({ products }) => {
  const [data, setData] = useState(products);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("relevan");

  useEffect(() => {
    if (search != "") {
      const _search = products.filter((a) => {
        if (a.name.match(search)) {
          return a;
        }
      });

      if (_search.length > 0) {
        setData(_search);
      } else {
        setData([]);
      }
    } else {
      setData(products);
    }
  }, [products, search]);

  useEffect(() => {
    if (filter === "tertinggi") {
      data.sort((a, b) => parseInt(a.harga) - parseInt(b.harga));
    }
    if (filter === "terendah") {
      data.sort((a, b) => parseInt(b.harga) - parseInt(a.harga));
    }
    // if (filter === "relevan") setData(products);
  }, [data, filter, products]);
  return (
    <Container>
      <Stack direction={{ base: "column", md: "row" }}>
        <Box>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Cari Produk.."
              onChange={(e) => {
                e.preventDefault();
                setSearch(e.target.value);
              }}
            />
          </InputGroup>
        </Box>
        <Spacer />
        <HStack>
          <Select
            variant="outline"
            onChange={(e) => {
              e.preventDefault();
              setFilter(e.target.value);
            }}
          >
            <option value={"relevan"}>Relevan</option>
            <option value={"terendah"}>Terendah</option>
            <option value={"tertinggi"}>Tertinggi</option>
          </Select>
        </HStack>
      </Stack>
      {data.length === 0 && (
        <Center mt={8}>
          <Heading size="sm">Produk tidak ditemukan.</Heading>
        </Center>
      )}
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={2} mt={8}>
        {data?.map((item, i) => (
          <Fragment key={i}>
            <ProductCard item={item} />
          </Fragment>
        ))}
      </SimpleGrid>
    </Container>
  );
};

Produk.getLayout = function getLayout(page) {
  return (
    <Layout title={"Produk"} description={"Produk teh ponda"}>
      {page}
    </Layout>
  );
};

export default Produk;
