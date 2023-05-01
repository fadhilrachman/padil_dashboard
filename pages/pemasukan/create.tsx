import Layout from "@/components/Layout";
import Title from "@/components/Title";
import {
  Card,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  CardBody,
  Textarea,
  Flex,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Create = () => {
  const router = useRouter();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const onSubmit = async (val: any) => {
    await axios.post("http://localhost:4000/pemasukan", val);
    console.log(val);
    router.push("/pemasukan");
  };
  return (
    <Layout>
      <Title title="Tambah Pemasukan" webTitle="padil || pemasukan" />
      <Card mt="6">
        <CardBody>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <FormControl mt="3">
              <FormLabel>Total Pemasukan</FormLabel>
              <Input
                type="date"
                isInvalid={errors.tanggal}
                focusBorderColor={errors.tanggal ? "#ff0000" : "#319795"}
                {...register("tanggal", {
                  required: "kolom ini wajib diisi",
                })}
              />
              {errors.tanggal && (
                <FormHelperText color="red">
                  {errors.tanggal.message}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl mt="3">
              <FormLabel>Total Pemasukan</FormLabel>
              <Input
                type="number"
                isInvalid={errors.total_pemasukan}
                focusBorderColor={
                  errors.total_pemasukan ? "#ff0000" : "#319795"
                }
                {...register("total_pemasukan", {
                  required: "kolom ini wajib diisi",
                })}
              />
              {errors.total_pemasukan && (
                <FormHelperText color="red">
                  {errors.total_pemasukan.message}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl mt="3">
              <FormLabel>Deskripsi</FormLabel>
              <Textarea
                focusBorderColor="#319795"
                {...register("deskripsi")}
              ></Textarea>
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <Flex mt="8" justifyContent="end">
              <Link href="/pemasukan">
                <Button mr="4">Back</Button>
              </Link>
              <Button colorScheme="teal" type="submit">
                Submit
              </Button>
            </Flex>
          </form>
        </CardBody>
      </Card>
    </Layout>
  );
};

export default Create;
