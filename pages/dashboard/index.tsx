import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Box, Card, CardBody, Text, Icon, Grid, Flex } from "@chakra-ui/react";
import { BiCoinStack, BiCoin } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";

interface datas {
  dataPemasukan?: any;
  dataPengeluaran?: any;
}
export default function Home() {
  const [datas, setDatas] = useState<datas>({
    dataPemasukan: [],
    dataPengeluaran: [],
  });
  let token: any = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
  );
  const labels: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  const data: any = {
    labels,
    datasets: [
      {
        label: "Pengeluaran",
        data: [2000000, 2500000, 3100000, 1100000, 1800000, 1000000],
        borderColor: "#fb923c",
        backgroundColor: "#fb923c",
      },
      {
        label: "Pemasukan ",
        data: [1000000, 2300000, 1300000, 1800000, 1100000, 3100000],
        borderColor: "#4ade80",
        backgroundColor: "#4ade80",
      },
    ],
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/pemasukan", {
        headers: { Authorization: token },
      })
      .then((val) => {
        console.log({ val });
        setDatas({ ...datas, dataPemasukan: val.data.data });
      })
      .catch((err) => {
        console.log({ err });
      });
    axios
      .get("http://localhost:4000/pengeluaran", {
        headers: { Authorization: token },
      })
      .then((val) => {
        console.log({ val });
        setDatas({ ...datas, dataPengeluaran: val.data.data });
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  let totalPemasukan: number = 0;
  let totalPengeluaran: number = 0;

  datas.dataPemasukan?.map(
    (val: any) => (totalPemasukan += val.total_pemasukan)
  );

  console.log({ datas, totalPemasukan });

  return (
    <>
      <Layout>
        <Title title="Dashboard" webTitle="padil | dashboard" />

        <Flex gap={10}>
          <Card mt="4" w="max-content">
            <CardBody display="flex" alignItems="center">
              <Icon as={BiCoinStack} h="50px" w="30px" mr="3" />
              <Box textAlign="center">
                <Text color="#" fontSize="2xl">
                  Total Pemasukan
                </Text>
                <Text color="" fontSize="xl">
                  {totalPemasukan}
                </Text>
              </Box>
            </CardBody>
          </Card>
          <Card mt="4" w="max-content">
            <CardBody display="flex" alignItems="center">
              <Icon as={BiCoin} h="50px" w="30px" mr="3" />
              <Box textAlign="center">
                <Text color="#" fontSize="2xl">
                  Total Pengeluaran
                </Text>
                <Text color="" fontSize="xl">
                  Rp.12,000
                </Text>
              </Box>
            </CardBody>
          </Card>
        </Flex>
        <Card mt="5" w="full">
          <CardBody>
            <Line options={options} data={data} className="" />
          </CardBody>
        </Card>
      </Layout>
    </>
  );
}
