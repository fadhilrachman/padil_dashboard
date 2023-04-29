import { Text } from "@chakra-ui/react";
import Head from "next/head";

interface Props {
  title: string;
  webTitle: string;
}
const Title = (props: Props) => {
  return (
    <div>
      <Head>
        <title>{props.webTitle}</title>
      </Head>
      <Text>{props.title}</Text>
    </div>
  );
};

export default Title;
