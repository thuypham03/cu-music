import {
  Button,
  FormLabel,
  FormControl,
  Input,
  Center,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@chakra-ui/react";
import NextLink from "next/link";

const Signup = () => {
  return (
    <>
      <Center>
        <Card size='lg'>
          <CardBody>
            <FormControl>
              <FormLabel>User Name</FormLabel>
              <Input type="text" placeholder="user name"></Input>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="email"></Input>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="password"></Input>
              <FormLabel>Re-enter password</FormLabel>
              <Input type="password" placeholder="re-enter password"></Input>
            </FormControl>
          </CardBody>
          <CardFooter>
            <NextLink href="/" passHref legacyBehavior>
              <Button variant="ghost" colorScheme="messenger" mr={"10"}>
                Cancel
              </Button>
            </NextLink>
            <Button variant="ghost" colorScheme="messenger">
              Sign Up
            </Button>
          </CardFooter>
        </Card>
      </Center>
    </>
  );
};

export default Signup;
