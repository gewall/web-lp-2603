import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Spacer,
  Avatar,
  Select,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
} from "@chakra-ui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { nav } from "@/services/content-i18n";
import { HamburgerIcon } from "@chakra-ui/icons";
import useLocalStorage from "@/libs/hooks/useLocalStorage";
import useSelector from "@/libs/hooks/useSelector";

const Navbar = () => {
  const { locale } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuRef = useRef();

  const { state, dispatch } = useSelector();

  useEffect(() => {
    if (locale === "id-ID") {
      // setItem("lang", "indonesia");
      dispatch({
        type: "setLang",
        payload: "indonesia",
      });
    } else {
      // setItem("lang", "inggris");
      dispatch({
        type: "setLang",
        payload: "inggris",
      });
    }
  }, [dispatch, locale]);

  const content = nav[state.lang];

  const ChangeLang = (e) => {
    dispatch({
      type: "setLang",
      payload: e.target.value,
    });
  };

  //   useEffect(() => {}, [locale]);

  return (
    <>
      <Flex
        zIndex={"banner"}
        as={"nav"}
        minWidth="max-content"
        position={"fixed"}
        bg={"white"}
        w={"full"}
        shadow={"md"}
      >
        <Flex
          w={"full"}
          alignItems={"center"}
          px={{ base: "12", md: "32" }}
          // mx={"auto"}
          py={4}
        >
          <Box>
            <Heading size={"md"}>{content.title}</Heading>
          </Box>
          <Spacer />
          <Flex display={{ base: "none", md: "flex" }} flex={"auto"}>
            <HStack spacing={8}>
              {content.navList.map((item, i) => (
                <Fragment key={i}>
                  <Link as={NextLink} href={`/${item.url}`}>
                    {item.text}
                  </Link>
                </Fragment>
              ))}
            </HStack>
            <Spacer />
            <HStack>
              <HStack>
                <Avatar name="Indonesia" src={content.langFlag} size={"2xs"} />
                <Select variant={"unstyled"} on onChange={(e) => ChangeLang(e)}>
                  <option value={"indonesia"}>{content.lang[0]}</option>
                  <option value={"inggris"}>{content.lang[1]}</option>
                </Select>
              </HStack>
            </HStack>
          </Flex>
          <Spacer display={{ base: "flex", md: "none" }} />
          <IconButton
            ref={menuRef}
            display={{ base: "flex", md: "none" }}
            aria-label="expand navbar"
            icon={<HamburgerIcon />}
            onClick={onOpen}
          />
        </Flex>
      </Flex>
      <MobileNav
        content={content}
        isOpen={isOpen}
        onClose={onClose}
        menuRef={menuRef}
        ChangeLang={ChangeLang}
        // setLang={setLang}
      />
    </>
  );
};

const MobileNav = ({ content, isOpen, onClose, menuRef, ChangeLang }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={menuRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{content.nav}</DrawerHeader>

        <DrawerBody>
          <VStack spacing={4}>
            {content.navList.map((item, i) => (
              <Fragment key={i}>
                <Link as={NextLink} href={`/${item.url}`}>
                  {item.text}
                </Link>
              </Fragment>
            ))}
            <HStack>
              <Avatar name="Indonesia" src={content.langFlag} size={"2xs"} />
              <Select variant={"unstyled"} onChange={(e) => ChangeLang(e)}>
                <option value={"indonesia"}>{content.lang[0]}</option>
                <option value={"inggris"}>{content.lang[1]}</option>
              </Select>
            </HStack>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Navbar;
