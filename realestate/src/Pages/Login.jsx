import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Flex,
  Checkbox,
 
  Box,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
  Modal,
  Text,
  useToast,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";
import { login } from "../Redux/Auth.action";
import { SIGN_OUT } from "../Redux/Auth.type";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();
  const { user, isAuth } = useSelector((store) => store.auth);

  const handleAuth = () => {
    if (email && password) {
      const payload = {
        email,
        password,
      };
      dispatch(login(payload)).then((res) => {
        onClose();
        toast({
            title: "Login successfully.",
            status: "success",
            duration: 3000,
            position: "top",
            isClosable: true,
          });
      });
    }
  };

  const handleLogOut = () => {
    dispatch({ type: SIGN_OUT });
    toast({
      title: "Log out successful.",
      status: "success",
      duration: 5000,
      position: "top",
      isClosable: true,
    });
  };

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <div>
      {isAuth ? (
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
          >
            <Avatar
              size={"sm"}
              src={
                "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              }
            />
          </MenuButton>
          <MenuList color="black" zIndex="100">
            <MenuItem onClick={handleLogOut}>LogOut</MenuItem>

            <MenuDivider />
          <Link to="/user">  <MenuItem>User Dashboard</MenuItem></Link>
          </MenuList>
        </Menu>
      ) : (
        <Button
          bg="none"
          borderColor={"red"}
          _hover={{ color: "tomato" }}
          onClick={onOpen}
        >
          LOGIN
        </Button>
      )}

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Login </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="20px">
            <label>Email</label>
            <Input mb="10px" onChange={(e) => setEmail(e.target.value)} value={email} />
            <label >Password</label>
            <Input
         
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button mt="20px" onClick={handleAuth}>
              SingIn
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};
