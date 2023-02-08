import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dataAction } from "../Redux/Data.action";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import axios from "axios";
export const PropertyList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((store) => store.data);
  const IMAGE =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWroE_9v7oo6Jh2oV3S7beLgytyaAk_-K0-g&usqp=CAU";

  const { token, isAuth } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(dataAction());
  }, []);

  const toast=useToast()
  const save = async (id) => {
    const body = {
      data: id,
    };

    if (isAuth) {
      const res = await axios
        .post("https://job-eadj.onrender.com/saved", body, {
          headers: {
            token: token.token,
          },
        })
        .then((res) => {
            toast({
                title: "Saved successfully.",
                status: "success",
                duration: 3000,
                position: "top",
                isClosable: true,
              });
        })
    
        
    } else {
        toast({
            title: "Please Login first",
            status: "warning",
            duration: 3000,
            position: "top",
            isClosable: true,
          });
    }
  };

  const sendmail = async (e) => {
    const payload = {
      email: e,
      date: Date(),
    };

    if(isAuth){
        try {
            let res = await axios
              .post(`https://job-eadj.onrender.com/contact`, payload)
              .then((res) => {
                window.location.href = `mailto:${e}`;
              });
          } catch (error) {
            toast({
                title: "SomeThing Error",
                status:"error",
                duration: 3000,
                position: "top",
                isClosable: true,
              });
          }
    }
    else{
        toast({
            title: "Please Login first",
            status: "warning",
            duration: 3000,
            position: "top",
            isClosable: true,
          });
    }


  };
  if (loading) {
    return (
      <div style={{ marginTop: "100px" }}>
        <h2>Loading...</h2>
      </div>
    );
  } else if (error) {
    return (
      <div style={{ marginTop: "100px" }}>
        <h2> Error...</h2>
      </div>
    );
  }

  return (
    <div>
      <div style={{ width: "95%", margin: "auto" }}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          gap="30px"
          p={5}
          marginTop={"50px"}
        >
          {data?.map((el) => (
            <Center py={12}>
              <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                bg={"white"}
                boxShadow={"2xl"}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
              >
                <Box
                  rounded={"lg"}
                  mt={-12}
                  pos={"relative"}
                  height={"230px"}
                  _after={{
                    transition: "all .3s ease",
                    content: '""',
                    w: "full",
                    h: "full",
                    pos: "absolute",
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${el.image})`,
                    filter: "blur(20px)",
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: "blur(20px)",
                    },
                  }}
                >
                  <Link to={`/detail/${el._id}`}>
                    <Image
                      rounded={"lg"}
                      height={230}
                      width={282}
                      objectFit={"cover"}
                      src={IMAGE}
                    />
                  </Link>
                </Box>
                <Stack pt={10} align={"center"}>
                  <Text
                    color={"gray.500"}
                    fontSize={"sm"}
                    textTransform={"uppercase"}
                  >
                    {el.address}
                  </Text>
                  <Heading
                    fontSize={"2xl"}
                    fontFamily={"body"}
                    fontWeight={500}
                  >
                    {el.type}
                  </Heading>
                  <Stack direction={"row"} align={"center"}>
                    <Text fontWeight={800} fontSize={"xl"}>
                      {el.price}
                    </Text>
                    <Text textDecoration={"line-through"} color={"gray.600"}>
                      {Number(el.price) + 14875}
                    </Text>
                  </Stack>
                  <Flex w="100%" justifyContent={"space-between"}>
                    <Button
                      onClick={() => sendmail(el.email)}
                      alignItems="center"
                      gap={"10px"}
                    >
                      Contact <EmailIcon margin="auto" />
                    </Button>
                    <Button onClick={() => save(el._id)}>Save</Button>
                  </Flex>
                </Stack>
              </Box>
            </Center>
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
};
