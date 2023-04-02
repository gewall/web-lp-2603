import Head from "next/head";
import NextImage from "next/image";
import NextLink from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { BsBoxes, BsHouseDoor, BsServer } from "react-icons/bs";
import Layout from "@/components/Layout";
import {
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
  WrapItem,
  Image,
  Flex,
  Stack,
  Icon,
  Spacer,
  Link,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronRightIcon,
  SearchIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import HeadPic from "@/assets/P1.jpg";

import useSelector from "@/libs/hooks/useSelector";
import { HeroHead } from "@/services/content-i18n";

import { register } from "swiper/element/bundle";
import { Fragment, useEffect, useRef } from "react";

import Container from "@/components/Container";
import { getProducts } from "@/libs/api/products";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  const products = await getProducts();
  return {
    props: {
      products: products || null,
    },
  };
};

export default function Home({ products }) {
  const { state } = useSelector();
  const swiperRef = useRef();
  const router = useRouter();

  const contentHead = HeroHead[state.lang];

  useEffect(() => {
    register();
  }, []);

  return (
    <>
      <Container>
        <Box
          position={"absolute"}
          // height={"full"}
          width={"full"}
          top={0}
          left={0}
          zIndex={-1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#FBD38D"
              fillOpacity="1"
              d="M0,160L48,165.3C96,171,192,181,288,202.7C384,224,480,256,576,266.7C672,277,768,267,864,245.3C960,224,1056,192,1152,197.3C1248,203,1344,245,1392,266.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 4, md: 2 }}
        >
          <Center justifyContent={"start"} flex={1}>
            <VStack alignItems={"start"} spacing={4}>
              <Box>
                <Heading>
                  Lorem{" "}
                  <Heading as={"span"} color={"orange.300"}>
                    Ipsum
                  </Heading>
                  <br /> Dolor{" "}
                  <Heading as={"span"} color={"orange.300"}>
                    Amet
                  </Heading>
                </Heading>
              </Box>
              <HStack>
                <Avatar name="Ponda" size={"sm"} />
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </HStack>
              <Button
                rightIcon={<SearchIcon />}
                size={"sm"}
                colorScheme="orange"
                variant="outline"
                onClick={() => {
                  router.push("/produk");
                }}
              >
                {contentHead.search}
              </Button>
            </VStack>
          </Center>
          <Center flex={1} display={{ base: "none", md: "flex" }}>
            <Image
              as={NextImage}
              src={HeadPic}
              alt={"head picture"}
              borderRadius={"full"}
              objectFit={"cover"}
              width={{ base: 150, md: 250 }}
              height={{ base: 150, md: 250 }}
            />
          </Center>
          <Center flex={1} justifyContent={"start"}>
            <VStack alignItems={"flex-start"} spacing={4}>
              <HStack>
                <ArrowRightIcon color={"gray.600"} />
                <VStack alignItems={"start"} spacing={0}>
                  <Heading size={"sm"}>{contentHead.excess[0].title}</Heading>
                  <Text fontSize={"sm"}>
                    {contentHead.excess[0].description}
                  </Text>
                </VStack>
              </HStack>
              <HStack>
                <TimeIcon color={"gray.600"} />
                <VStack alignItems={"start"} spacing={0}>
                  <Heading size={"sm"}>{contentHead.excess[1].title}</Heading>
                  <Text fontSize={"sm"}>
                    {contentHead.excess[1].description}
                  </Text>
                </VStack>
              </HStack>
              <HStack>
                <CheckIcon color={"gray.600"} />
                <VStack alignItems={"start"} spacing={0}>
                  <Heading size={"sm"}>{contentHead.excess[2].title}</Heading>
                  <Text fontSize={"sm"}>
                    {contentHead.excess[2].description}
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </Center>
        </Stack>
      </Container>

      <Container mt={{ base: 8, md: "16" }}>
        {/* <Box>
          <Heading textAlign={"center"}>
            Dari{" "}
            <Heading as={"span"} color={"orange.300"}>
              Petani{" "}
            </Heading>
            <br />
            Untuk{" "}
            <Heading as={"span"} color={"orange.300"}>
              Dunia{" "}
            </Heading>
          </Heading>
        </Box> */}

        <Stack direction={{ base: "column", md: "row" }}>
          <HeaderCard
            icon={BsServer}
            title={contentHead.companyDesc[0].title}
            desc={contentHead.companyDesc[0].desc}
          />
          <HeaderCard
            icon={BsBoxes}
            title={contentHead.companyDesc[1].title}
            desc={contentHead.companyDesc[1].desc}
          />
          <HeaderCard
            icon={BsHouseDoor}
            title={contentHead.companyDesc[2].title}
            desc={contentHead.companyDesc[2].desc}
          />
        </Stack>
      </Container>

      <Box bg={"orange.200"} py={8} mt={{ base: 8, md: "16" }}>
        <Stack
          direction={{ base: "column", md: "row" }}
          px={{ base: "12", md: "32" }}
          w={"full"}
          spacing={{ base: 8, md: 120 }}
        >
          <VStack alignItems={"flex-start"}>
            <Box>
              <Heading>
                Dari{" "}
                <Heading as={"span"} color={"orange.300"}>
                  Petani{" "}
                </Heading>
                <br />
                Untuk{" "}
                <Heading as={"span"} color={"orange.300"}>
                  Dunia{" "}
                </Heading>
              </Heading>
            </Box>
            <Box>
              <Text>
                orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </Text>
            </Box>
          </VStack>
          {/* <Spacer /> */}
          <Box maxW={"sm"}>
            <swiper-container
              ref={swiperRef}
              // navigation="true"
              // centered-slides="true"
              autoplay-delay="2500"
              autoplay-disable-on-interaction="false"
              // pagination-clickable="true"
            >
              <swiper-slide>
                <Box w={"sm"} h={"sm"} position={"relative"}>
                  {/* <ProductCard item={item} /> */}
                  <NextImage
                    // as={NextImage}
                    src={
                      "https://res.cloudinary.com/dlyc5g71i/image/upload/v1680065826/ponda/produksi/DSC00848_dyglni.jpg"
                    }
                    alt={"proses pembuatan gula aren"}
                    fill
                    style={{ objectFit: "cover", borderRadius: 15 }}
                    // borderRadius={"full"}
                    // objectFit={"cover"}
                    // width={{ base: 150, md: 250 }}
                    // height={{ base: 150, md: 250 }}
                    // style={{ width: 150, height: 150 }}
                  />
                </Box>
              </swiper-slide>
              <swiper-slide>
                <Box w={"sm"} h={"sm"} position={"relative"}>
                  {/* <ProductCard item={item} /> */}
                  <NextImage
                    // as={NextImage}
                    src={
                      "https://res.cloudinary.com/dlyc5g71i/image/upload/v1680065826/ponda/produksi/DSC_9463_gk9d3a.jpg"
                    }
                    alt={"proses pengambilan bahan gula aren"}
                    fill
                    style={{ objectFit: "cover", borderRadius: 15 }}
                    // borderRadius={"full"}
                    // objectFit={"cover"}
                    // width={{ base: 150, md: 250 }}
                    // height={{ base: 150, md: 250 }}
                    // style={{ width: 150, height: 150 }}
                  />
                </Box>
              </swiper-slide>
            </swiper-container>
          </Box>
        </Stack>
      </Box>

      <Container>
        <Stack mt={8} direction={{ base: "column", md: "row" }}>
          <Box>
            <Heading size={"lg"}>
              <Heading size={"lg"} as={"span"} color={"orange.300"}>
                Produk Terbaik{" "}
              </Heading>
              <br />
              Dari Kami
            </Heading>
          </Box>
          <Spacer />
          <Center>
            <Text>
              Produk rekomendasi kami yang telah dibeli oleh
              <br /> banyak konsumer
            </Text>
          </Center>
        </Stack>

        <Box mt={8}>
          <Wrap
            justify={"space-between"}
            display={{ base: "none", md: "Block" }}
          >
            {products?.map((item, i) => (
              <WrapItem key={i}>
                <ProductCard item={item} />
              </WrapItem>
            ))}
          </Wrap>
          <Box display={{ base: "block", md: "none" }}>
            <swiper-container
              class="mySwiper"
              direction="horizontal"
              // pagination="true"
              // pagination-type="progressbar"
              // pagination-clickable="true"
              navigation={"true"}
            >
              {products?.slice(0, 3).map((item, i) => (
                <swiper-slide key={i}>
                  <ProductCard item={item} />
                </swiper-slide>
              ))}
            </swiper-container>
          </Box>
        </Box>

        <Stack mt={8} direction={{ base: "row" }}>
          <Box>
            <Heading size={"lg"}>
              <Heading size={"lg"} as={"span"} color={"orange.300"}>
                Produk{" "}
              </Heading>
              Dari{" "}
              {/* <Box as={"span"} display={{ base: "block", md: "none" }}>
                <br />
              </Box>{" "} */}
              Kami
            </Heading>
          </Box>
          <Spacer />
          <Center>
            <Link as={NextLink} href={"/produk"}>
              Lihat Semua
            </Link>
          </Center>
        </Stack>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={2} mt={8}>
          {products?.slice(0, 8).map((item, i) => (
            <Fragment key={i}>
              <ProductCard item={item} />
            </Fragment>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

const HeaderCard = ({ icon, title, desc }) => {
  return (
    <Box flex={1}>
      <VStack>
        <Center
          rounded={"full"}
          // border={"solid 1px"}
          // borderColor={"gray.400"}
          shadow={"md"}
          bg={"gray.50"}
          w={50}
          h={50}
        >
          <Icon as={icon} color={"gray.600"} />
        </Center>
        <Box>
          <Heading size={"md"}>{title}</Heading>
        </Box>
        <Text textAlign={"center"}>{desc}</Text>
      </VStack>
    </Box>
  );
};

Home.getLayout = function getLayout(page) {
  return (
    <Layout title={"Produk"} description={"Produk teh ponda"}>
      {page}
    </Layout>
  );
};

