import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./common.css"
const getContact= async()=>{
    return axios.get("https://job-eadj.onrender.com/contact")
}
export const UserDashboard = () => {
  const [data, setData] = useState([]);
  const [c, setc] = useState([]);
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  const { token } = useSelector((store) => store.auth);
  
  
  useEffect(() => {
    getdata();
   getContact().then((res) => {
          setc(res.data);;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(c);
  const getdata = async () => {
    axios
      .get("https://job-eadj.onrender.com/saved", {
        headers: {
          token: token.token,
        },
      })
      .then((res) => {
        setData(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const remove = async (id) => {
    let x = token.token;

    axios
      .delete(`https://job-eadj.onrender.com/saved/${id}`, {
        headers: {
          token: x,
        },
      })
      .then((res) => {
        alert("Delated");
        getdata();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) {
    return (
      <div style={{ marginTop: "70px" }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (token.token == undefined) {
    return navigate("/");
  }

  return (
    <div>
  <SimpleGrid
          columns={{ base: 1, sm: 1, md: 1, lg: 2 }}
          gap="20px"
          p={5}
          width="95%"
         
          margin="auto"
          marginTop={"50px"}
          justifyContent="center"
        >
        
        <Box maxHeight="700px" >
          <Text
            borderBottom="2px dotted teal"
            w="fit-content"
            m={"auto"}
            fontWeight="bold"
          >
            Contact History
          </Text>
          <TableContainer overflow="auto"     maxHeight="700px">
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>Sr</Th>
                  <Th>Email</Th>
                  <Th>Time</Th>
                </Tr>
              </Thead>
              <Tbody >
                {c?.map((el,i) => (
                  <Tr>
                    <Td>{i+1}</Td>
                    <Td>{el.email} </Td>
                    <Td>{el.date} </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box  >
          <Text
            borderBottom="2px dotted teal"
            fontWeight="bold"
            w="fit-content"
            m={"auto"}
          >
            Saved Property
          </Text>
          <SimpleGrid 
           
            columns={{ base: 1, sm: 1, md: 2, lg: 1 }}
            gap="15px"
            p={7}
          >
            {data?.map((el) => (
              <Center>
                <Stack
                  borderWidth="1px"
                  borderRadius="lg"
                  w={{ sm: "100%", md: "540px" }}
                  direction={{ base: "column", md: "row" }}
                  bg="white"
                  boxShadow={"2xl"}
                  padding={4}
                >
                  <Flex flex={1} bg="blue.200">
                    <Image
                      objectFit="cover"
                      boxSize="100%"
                      h="250px"
                      w="100%"
                      src={el.data.image}
                    />
                  </Flex>
                  <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    pt={2}
                  >
                    <Heading fontSize={"2xl"} fontFamily={"body"}>
                      {el.data.type}
                    </Heading>
                    <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                      Contact : {el.data.email}
                    </Text>
                    <Text textAlign={"center"} color="gray.700" px={3}>
                      {el.data.address}
                    </Text>

                    <Text
                      textAlign={"center"}
                      color="dark-gray"
                      fontWeight="500"
                      px={3}
                    >
                      Price : {el.data.price}
                    </Text>

                    <Button
                      onClick={() => remove(el._id)}
                      bg="pink"
                      color="white"
                      _hover={{ bg: "teal" }}
                    >
                      Remove
                    </Button>
                  </Stack>
                </Stack>
              </Center>
            ))}
          </SimpleGrid>
        </Box>


       
        </SimpleGrid>
    </div>
  );
};
