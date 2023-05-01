import {
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const login = () => {
  return (
    <Flex
      bgColor="rgb(245, 245, 245)"
      justifyContent="center"
      alignItems="center"
      h="100vh"
    >
      <Card w="500px" h="max-content">
        <CardBody>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input focusBorderColor="#319795" placeholder="user@gmail.com" />
          </FormControl>
          <FormControl mt="5">
            <FormLabel>Password</FormLabel>
            <Input
              focusBorderColor="#319795"
              type="password"
              placeholder="pass2132"
            />
          </FormControl>
          <Button colorScheme="teal" mt="7" w="full">
            Login
          </Button>
          <small style={{ display: "flex" }}>
            Belum Punya Akun?
            <Link href="/register">
              <Text color="teal" ml="1">
                Register
              </Text>
            </Link>
          </small>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default login;
