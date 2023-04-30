import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import { Button, Flex, Card, Input, CardBody } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BiSearch, BiTrash, BiPencil } from "react-icons/bi";
import BaseTable from "@/components/BaseTable";

interface Column {
  index?: string;
  title: string;
  render?: React.ReactNode;
}
export default function Home() {
  const column = [
    {
      index: "tanggal",
      title: "Tanngal",
    },
    {
      index: "total_pemasukan",
      title: "Total Pemasukan",
    },
    {
      index: "deskripsi",
      title: "Deskripsi",
    },
    {
      title: "Action",
      render: () => (
        <>
          <Button variant="solid">
            <Icon as={BiPencil} />
          </Button>
          <Button variant="solid" ml="2">
            <Icon as={BiTrash} />
          </Button>
        </>
      ),
    },
  ];
  const data = [
    {
      tanggal: "21-09-04",
      total_pemasukan: 20000,
      deskripsi: "coyy",
    },
  ];
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
        <BaseTable column={column} data={data} />
      </Layout>
    </>
  );
}
