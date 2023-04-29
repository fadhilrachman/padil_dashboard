import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
export default function Home() {
  return (
    <>
      <Layout>
        <Title title="Pemasukan" webTitle="padil | pemasukan" />
      </Layout>
    </>
  );
}
