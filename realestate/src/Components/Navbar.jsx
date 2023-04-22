import React from "react";

import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Input,
  Img,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../Pages/Login";
import { SIGN_OUT } from "../Redux/Auth.type";

export const Navbar = () => {
  const { isAuth } = useSelector((store) => store.auth);
 
  const dispatch = useDispatch();
  return (
    <div style={{ width:"100%"}}>
      <Box
      textDecoration="none"
      position="fixed"
      top="0"
      left="0"
      bg="white"
      width="100%"
      zIndex="200"
        boxShadow="rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"
      
        px={4}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          color="white"
        >
          <HStack spacing={8} alignItems={"center"}>
            <Box> 

             <Link to="/"> <Img h="100px" w="100%"  src="https://i.ibb.co/qBMkwDr/logo-removebg-preview.png" alt="" /></Link>
            </Box>
          </HStack>

         
          <Flex alignItems={"center"} gap="20px" color="black" fontWeight="500">
            <Link to="/">PROPERTY</Link>
              {
                !isAuth?<Link to="/signup">SIGNUP</Link>:""
              }
              <Login/>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
};
