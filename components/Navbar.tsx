import { Button, Flex, Grid } from "@chakra-ui/react";
import Link from "next/link";
const Navbar = () => {
  return (
    <Flex
      border="1px solid #ebe9e7"
      px="12"
      py="7"
      // backgroundColor="teal."
      alignItems="center"
      justifyContent="space-between"
    >
      <span>Navbar</span>
      <Link href="/login">
        <Button colorScheme="teal">Login</Button>
      </Link>
    </Flex>
  );
};

export default Navbar;
