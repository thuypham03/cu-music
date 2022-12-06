import NextLink from "next/link";
import { Box, Button, HStack, Link, Text, Flex, Spacer, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { signInWithGoogle } from '../util/firebase';
import { useAuth } from "../Components/auth/AuthUserProvider";

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
    name: "Generator",
    path: "/generatorPage"
  },
  {
    name: "Profile",
    path: "/userProfile"
  }
];

//Styling and linking
const NavLink = ({ name, path }: NavLinkData) => {  
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

type Prop={
  showLogin:boolean
}

const Navbar = ({showLogin}:Prop) => {
  const { user, signOut } = useAuth()

  return (
    <Flex shadow="base">
      <Box px={10} >
        <HStack justifyContent={"space-between"}>
          <HStack h={14} as="nav" spacing={14} alignItems="center">
            {navigations.map((data) => (
              data.name == "Profile" && !user ? null : <NavLink key={data.path}{...data}/>
            ))}
          </HStack>
        </HStack>
      </Box>
      <Spacer />

      <Box alignSelf='flex-end' px={10}>
      <HStack justifyContent={"space-between"} h={14} as="nav" spacing={4} alignItems="center">
          {user && <>
            <HStack>
              <Image boxSize="40px" borderRadius="full" src="cornell-logo.png" alt="User Image" />
              <Text>{user.displayName}</Text>
            </HStack>
          </>}
          <Button
            _focusVisible={{ shadow: "outline" }}
            _focus={{ shadow: "none" }}
            colorScheme={"facebook"}
            onClick={user ? signOut : signInWithGoogle}
          >
            {user ? "Sign Out" : "Sign In"}
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Navbar;
