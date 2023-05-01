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
import Link from "next/link";
import React from "react";

const Create = () => {
  return (
    <Layout>
      <Title title="Tambah Pemasukan" webTitle="padil || pemasukan" />
      <Card mt="6">
        <CardBody>
          <form action="">
            <FormControl>
              <FormLabel>Tanggal</FormLabel>
              <Input type="date" focusBorderColor="#319795" />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl mt="3">
              <FormLabel>Total Pemasukan</FormLabel>
              <Input type="number" focusBorderColor="#319795" />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl mt="3">
              <FormLabel>Tanggal</FormLabel>
              <Textarea focusBorderColor="#319795"></Textarea>
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <Flex mt="8" justifyContent="end">
              <Link href="/pemasukan">
                <Button mr="4">Back</Button>
              </Link>
              <Button colorScheme="teal">Submit</Button>
            </Flex>
          </form>
        </CardBody>
      </Card>
    </Layout>
  );
};

export default Create;
