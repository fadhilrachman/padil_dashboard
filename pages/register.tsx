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
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
const Register = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleRegister = async (val: any) => {
    console.log(val);
    await axios.post("http://localhost:4000/user", val);
    router.push("/login");
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
          <form action="" onSubmit={handleSubmit(handleRegister)}>
            {" "}
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="user123"
                isInvalid={errors.nama}
                focusBorderColor={errors.nama ? "#ff0000" : "#319795"}
                {...register("nama", {
                  required: "kolom ini wajib diisi",
                })}
              />
              {errors.nama && (
                <FormHelperText color="red">
                  {errors.nama.message}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl mt="5">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
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
                type="password"
                placeholder="********"
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
            <FormControl mt="5">
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="********"
                isInvalid={errors.confirm_password}
                focusBorderColor={
                  errors.confirm_password ? "#ff0000" : "#319795"
                }
                {...register("confirm_password", {
                  required: "kolom ini wajib diisi",
                })}
              />
              {errors.confirm_password && (
                <FormHelperText color="red">
                  {errors.confirm_password.message}
                </FormHelperText>
              )}
            </FormControl>
            <Button colorScheme="teal" mt="7" w="full" type="submit">
              Register
            </Button>
          </form>
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
