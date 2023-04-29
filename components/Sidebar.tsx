import { Grid, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
interface ListItemSidebar {
  path?: string;
  title: string;
}

const Sidebar = () => {
  const [item, setItem] = useState<string>("Dashboard");
  const router = useRouter();
  const path = router.pathname;
  const listSidebar: ListItemSidebar[] = [
    {
      path: "/dashboard",
      title: "Dashboard",
    },
    {
      path: "/pemasukan",
      title: "Pemasukan",
    },
    {
      path: "/pengeluaran",
      title: "Pengeluaran",
    },
  ];
  console.log(path === "/dashboard");

  return (
    <Grid
      py=""
      borderRight="1px solid #ebe9e7"
      w="240px"
      minH="100vh"
      shadow="xl"
    >
      <ul>
        {listSidebar.map((val) => (
          <Link href={`${val.path}`}>
            <Flex
              className={`${
                val.path?.toLowerCase() !== path.toLowerCase()
                  ? "hover2"
                  : "hover"
              }`}
              py="5"
              px="4"
              align="center"
              color={`${
                val.path?.toLowerCase() == path.toLowerCase() && "teal"
              }`}
              //   onClick={() => setItem(val.path)}
              // bg={`${val.path?.toLowerCase() == item.toLowerCase() && "#dffffe"}`}
            >
              {path.toLowerCase() == val.path?.toLowerCase() ? (
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

              <li>{val.title}</li>
            </Flex>
          </Link>
        ))}
      </ul>
    </Grid>
  );
};

export default Sidebar;
