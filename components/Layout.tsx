import Navbar from "../components/Navbar";
import React from "react";
import Sidebar from "@/components/Sidebar";
import { Flex, Grid } from "@chakra-ui/react";

type MyComponentProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: MyComponentProps) => {
  return (
    <div>
      <Navbar />
      <Flex>
        <Sidebar />
        <Grid p="5" bgColor="rgb(245, 245, 245)" w="full">
          <div>{children}</div>
        </Grid>
      </Flex>
    </div>
  );
};

export default Layout;
