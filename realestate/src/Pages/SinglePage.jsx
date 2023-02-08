import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EmailIcon } from "@chakra-ui/icons";
const getData = async (id) => {
  return axios.get(`https://job-eadj.onrender.com/data/${id}`);
};

export const SinglePage = () => {
  const { id } = useParams();

  const [data, setdata] = useState([]);

  useEffect(() => {
    getData(id).then((res) => setdata(res.data));
  }, [id]);

  return (
    <div style={{ marginTop: "55px" }}>
      <Box>
        <Center py={6}>
          <Box
            maxW={"55%"}
            w={"full"}
            bg="white"
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box
              h={"auto"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
            >
              <Image
                w="100%"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWroE_9v7oo6Jh2oV3S7beLgytyaAk_-K0-g&usqp=CAU"
              />
            </Box>
            <Stack>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                Type: {data.type}
              </Text>
              <Heading color="gray.700" fontSize={"2xl"} fontFamily={"body"}>
                Location: {data.address}
              </Heading>
              <Text color={"gray.500"}>{data.description}</Text>
            </Stack>
            <Flex
              m="auto"
              mt={6}
              justifyContent="space-between"
              spacing={4}
              align={"center"}
            >
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>Contact: {data.email}</Text>
                <Text color={"gray.500"}>{Date()}</Text>
              </Stack>

              <Flex gap="15px">
                <Button>
                  <EmailIcon />
                </Button>
                <Button>Save</Button>
              </Flex>
            </Flex>
          </Box>
        </Center>
      </Box>

   
    </div>
  );
};
