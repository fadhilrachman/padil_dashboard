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
  const token = localStorage.getItem("token");
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const onSubmit = async (val: any) => {
    const token = localStorage.getItem("token");
    await axios.post("http://localhost:4000/pengeluaran", val, {
      headers: { Authorization: token },
    });
    console.log(val);
    router.push("/pengeluaran");
  };
  return (
    <Layout>
      <Title title="Tambah Pengeluaran" webTitle="padil || pengeluaran" />
      <Card mt="6">
        <CardBody>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <FormControl mt="3">
              <FormLabel>Total Pengeluaran</FormLabel>
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
              <FormLabel>Total Pengeluaran</FormLabel>
              <Input
                type="number"
                isInvalid={errors.total_pengeluaran}
                focusBorderColor={
                  errors.total_pengeluaran ? "#ff0000" : "#319795"
                }
                {...register("total_pengeluaran", {
                  required: "kolom ini wajib diisi",
                })}
              />
              {errors.total_pengeluaran && (
                <FormHelperText color="red">
                  {errors.total_pengeluaran.message}
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
              <Link href="/pengeluaran">
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
