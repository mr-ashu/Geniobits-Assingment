import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    useToast,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
  
  export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const toast = useToast();
    const dispatch = useDispatch();
    const { user, isAuth } = useSelector((store) => store.auth);
  
    const handleSignup = () => {
      if (email && password) {
        const payload = {
          name,
          email,
          phone,
          password,
        };
         
        axios.post(`https://job-eadj.onrender.com/signup`,payload).then((res)=>{
          toast({
            title: "Signup successfully.",
            status: "success",
            duration: 3000,
            position: "top",
            isClosable: true,
          });
        })
        
        
      
      }
    };


    return (
      <Stack minH={'90vh'} marginTop="60px" direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Signup Your Account</Heading>
            <FormControl >
              <FormLabel>Name</FormLabel>
              <Input value={name} onChange={(e)=>setName(e.target.value)}  type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email Address</FormLabel>
              <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
            </FormControl>
            <FormControl  >
              <FormLabel>Mobile No.</FormLabel>
              <Input value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
            </FormControl>
            <Stack spacing={6}>
          
              <Button onClick={handleSignup} colorScheme={'teal'} variant={'solid'}>
                Submit
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://m.economictimes.com/thumb/msid-53350542,width-1200,height-900,resizemode-4,imgsize-59263/certain-real-estate-segments-may-not-be-the-best-bet-right-now-heres-why.jpg'
            }
          />
        </Flex>
      </Stack>
    );
  }
