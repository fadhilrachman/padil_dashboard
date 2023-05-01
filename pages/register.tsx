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

const Register = () => {
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
            <FormLabel>Usernama</FormLabel>
            <Input focusBorderColor="#319795" placeholder="user123" />
          </FormControl>
          <FormControl mt="5">
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
          <FormControl mt="5">
            <FormLabel>Confirm Password</FormLabel>
            <Input
              focusBorderColor="#319795"
              type="password"
              placeholder="pass2132"
            />
          </FormControl>
          <Button colorScheme="teal" mt="7" w="full">
            Register
          </Button>
          <small style={{ display: "flex" }}>
            Sudah Punya Akun?
            <Link href="/login">
              <Text color="teal" ml="1">
                Login
              </Text>
            </Link>
          </small>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Register;
