import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Link,
  Center,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react";
import NextLink from "next/link";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        _focusVisible={{ shadow: "outline" }}
        _focus={{ shadow: "none" }}
        colorScheme={"messenger"}
        variant={"link"}
      >
        Login
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><Center>Login</Center></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder="example123@mail.com"/>
                <FormLabel>Password</FormLabel>
                <Input type='password' placeholder="password"/>
            </FormControl>
            <Center>
              <NextLink href="/signUpPage"  passHref legacyBehavior>
                <Link color={'messenger.600'} _hover={{textDecoration:'none'}}>
                  <Text
                    size="sm"
                    fontStyle="italic"
                    my="4px"
                  >
                    Create new account?
                  </Text>
                </Link>
              </NextLink>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={onClose}
              colorScheme={"messenger"}
              _focusVisible={{ shadow: "outline" }}
              _focus={{ shadow: "none" }}
              variant="ghost"
              mr={10}
            >
              Cancel
            </Button>
            <Button
              colorScheme={"messenger"}
              _focusVisible={{ shadow: "outline" }}
              _focus={{ shadow: "none" }}
              variant="ghost"
            >
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
