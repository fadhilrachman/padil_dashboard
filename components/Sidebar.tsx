import { Grid, Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { BiCoinStack, BiCoin } from "react-icons/bi";

interface ListItemSidebar {
  path?: string;
  title: string;
  icon?: any;
}

const Sidebar = () => {
  const [item, setItem] = useState<string>("Dashboard");
  const router = useRouter();
  const path = router.pathname;
  console.log(path.split("/")[1]);

  const listSidebar: ListItemSidebar[] = [
    {
      path: "/dashboard",
      title: "Dashboard",
    },
    {
      path: "/pemasukan",
      title: "Pemasukan",
      icon: BiCoinStack,
    },
    {
      path: "/pengeluaran",
      title: "Pengeluaran",
      icon: BiCoin,
    },
  ];
  console.log(path === "/dashboard");

  return (
    <Grid
      py=""
      borderRight="1px solid #ebe9e7"
      w="270px"
      minH="100vh"
      shadow="xl"
    >
      <ul>
        {listSidebar.map((val) => (
          <Link href={`${val.path}`}>
            <Flex
              className={`${
                val.path?.split("/")[1]?.toLowerCase() !==
                path.split("/")[1]?.toLowerCase()
                  ? "hover2"
                  : "hover"
              }`}
              py="5"
              px="4"
              align="center"
              color={`${
                val.path?.split("/")[1]?.toLowerCase() ==
                  path.split("/")[1]?.toLowerCase() && "teal"
              }`}
              //   onClick={() => setItem(val.path)}
              // bg={`${val.path?.split('/')[1]?.toLowerCase() == item.toLowerCase() && "#dffffe"}`}
            >
              {path.split("/")[1]?.toLowerCase() ==
              val.path?.split("/")[1]?.toLowerCase() ? (
                <div
                  style={{
                    backgroundColor: "#319795",
                    width: "3px",
                    height: "63px",
                    position: "absolute",
                    left: "0",
                  }}
                ></div>
              ) : (
                ""
              )}
              <Icon as={val?.icon} />
              <li style={{ marginLeft: "13px" }}>{val.title}</li>
            </Flex>
          </Link>
        ))}
      </ul>
    </Grid>
  );
};

export default Sidebar;
