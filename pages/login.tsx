import {
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useForm } from "react-hook-form";
const login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = async (val: any) => {
    console.log(val);
    await axios.post("http://localhost:4000/login", val);
  };
  return (
    <Flex
      bgColor="rgb(245, 245, 245)"
      justifyContent="center"
      alignItems="center"
      h="100vh"
    >
      <Card w="500px" h="max-content">
        <CardBody>
          <form action="" onSubmit={handleSubmit(handleLogin)}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="user@gmail.com"
                isInvalid={errors.email}
                focusBorderColor={errors.email ? "#ff0000" : "#319795"}
                {...register("email", {
                  required: "kolom ini wajib diisi",
                })}
              />
              {errors.email && (
                <FormHelperText color="red">
                  {errors.email.message}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl mt="5">
              <FormLabel>Password</FormLabel>
              <Input
                focusBorderColor="#319795"
                type="password"
                isInvalid={errors.password}
                focusBorderColor={errors.password ? "#ff0000" : "#319795"}
                {...register("password", {
                  required: "kolom ini wajib diisi",
                })}
              />
              {errors.password && (
                <FormHelperText color="red">
                  {errors.password.message}
                </FormHelperText>
              )}
            </FormControl>
            <Button colorScheme="teal" mt="7" w="full" type="submit">
              Login
            </Button>
          </form>
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
