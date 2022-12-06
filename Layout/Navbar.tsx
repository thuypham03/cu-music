import NextLink from "next/link";
import { Box, Button, HStack, Link, Text, Flex, Spacer, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Login from '../Components/Login'

type NavLinkData = {
  name: string;
  path: string;
};

//The list of navigations on the navigation bar
const navigations: NavLinkData[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name:"Generator",
    path:"/generatorPage"
  }
];

//Styling and linking
const NavLink = ({ name, path }: NavLinkData) => {
  // const { pathname: currentPath } = useRouter();
  return (
    <NextLink key={path} href={path} passHref legacyBehavior>
      <Link _hover={{ textDecoration: "none" }} tabIndex={-1}>
        <Button
          _focusVisible={{ shadow: "outline" }}
          _focus={{ shadow: "none" }}
          colorScheme={"messenger"}
          variant={"link"}
        >
          {name}
        </Button>
      </Link>
    </NextLink>
  );
};

//
type Prop={
  showLogin:boolean
}

const Navbar = ({showLogin}:Prop) => {
  return (
    <Flex shadow="base">
      <Box px={4} >
        <HStack justifyContent={"space-between"}>
          <HStack h={14} as="nav" spacing={14} alignItems="center">
            {navigations.map((data) => (
              <NavLink key={data.path} {...data} />
            ))}
            {showLogin?<Login />:<></>}
          </HStack>
        </HStack>
      </Box>
      <Spacer />

      <Box alignSelf='flex-end' px={20}>
      <HStack justifyContent={"space-between"}>
          <HStack h={14} as="nav" spacing={4} alignItems="center">
            <Image boxSize="40px" borderRadius="full" src="cornell-logo.png" alt="User Image" />
            <Text>Username</Text>
          </HStack>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Navbar;
