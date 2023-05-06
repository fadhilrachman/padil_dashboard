import { Button, Flex, Grid, Text } from "@chakra-ui/react";
import Link from "next/link";
const Navbar = () => {
  let token: any = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  return (
    <Flex
      border="1px solid #ebe9e7"
      px="12"
      py="7"
      // backgroundColor="teal."
      alignItems="center"
      justifyContent="space-between"
    >
      <span>Padil Dashboard</span>
      {token ? (
        <Text>Selamat Datang User</Text>
      ) : (
        <Link href="/login">
          <Button colorScheme="teal">Login</Button>
        </Link>
      )}
    </Flex>
  );
};

export default Navbar;
