import React, { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import { Button, Flex, Card, Input, CardBody } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BiSearch, BiTrash, BiPencil } from "react-icons/bi";
import BaseTable from "@/components/BaseTable";
import axios from "axios";
import ModalDelete from "@/components/ModalDelete";

interface Modal {
  is_active: boolean;
  id: string;
}
export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [modal, setModal] = useState<Modal>({ is_active: false, id: "" });
  const [datas, setDatas] = useState<any>();
  let token: any = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  console.log({ token });

  useEffect(() => {
    axios
      .get("http://localhost:4000/pemasukan", {
        headers: { Authorization: token },
      })
      .then((val) => {
        console.log({ val });
        setDatas(val.data.data);
      })
      .catch((err) => {
        console.log({ err });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [modal.id]);
  console.log({ datas });

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
      render: (val, item) => (
        <>
          <Button variant="solid">
            <Icon as={BiPencil} />
          </Button>
          <Button
            variant="solid"
            ml="2"
            onClick={() => {
              console.log(item);
              setModal({ is_active: true, id: item._id });
            }}
          >
            <Icon as={BiTrash} />
          </Button>
        </>
      ),
    },
  ];
  const handleDelete = async () => {
    await axios.delete(`http://localhost:4000/pemasukan/${modal.id}`, {
      headers: { Authorization: token },
    });
  };
  return (
    <>
      <Layout>
        <Title title="Pemasukan" webTitle="padil || pemasukan" />
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
          <Link href="/pemasukan/create">
            <Button colorScheme="teal">Tambah Data</Button>
          </Link>
        </Flex>
        <BaseTable column={column} loading={loading} data={datas} />
        <ModalDelete
          show={modal.is_active}
          close={() => setModal(false)}
          onClick={handleDelete}
        />
      </Layout>
    </>
  );
}
