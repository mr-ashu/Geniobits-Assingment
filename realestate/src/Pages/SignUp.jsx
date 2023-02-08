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
  } from '@chakra-ui/react';
  
  export default function Signup() {
    return (
      <Stack minH={'90vh'} marginTop="60px" direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Signup Your Account</Heading>
            <FormControl >
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email Address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl  >
              <FormLabel>Mobile No.</FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={6}>
          
              <Button colorScheme={'teal'} variant={'solid'}>
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
