import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import { Button, Flex, Grid, Input } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
export default function Home() {
  return (
    <>
      <Layout>
        <Title title="Pengeluaran" webTitle="padil | pengeluaran" />
        <Flex alignItems="center" mt="4" justifyContent="space-between">
          <Flex alignItems="center">
            <Input
              focusBorderColor="#319795"
              bg="white"
              placeholder="cari...."
            />
            <Button bg="white" ml="3">
              <Icon as={BiSearch} />
            </Button>
          </Flex>
          <Button colorScheme="teal">Tambah Data</Button>
        </Flex>
      </Layout>
    </>
  );
}
