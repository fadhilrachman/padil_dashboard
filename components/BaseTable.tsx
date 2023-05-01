import React from "react";
import {
  Button,
  Flex,
  Card,
  Input,
  CardBody,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Spinner,
} from "@chakra-ui/react";
import { BiColumns } from "react-icons/bi";

interface Column {
  index?: string;
  title: string;
  render?: React.ReactNode;
}

interface Props {
  column: Column[];
  data?: any;
  loading: boolean;
}
const BaseTable = (props: Props) => {
  return (
    <Card mt="8">
      <CardBody>
        <TableContainer>
          <Table variant="simple" textAlign="center">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>#</Th>
                {props.column.map((val) => (
                  <Th textAlign="center">{val.title}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {props.loading ? (
                <Tr>
                  <Td colSpan={props.column.length + 1} textAlign="center">
                    <Spinner />
                  </Td>
                </Tr>
              ) : props.data?.length === 0 ? (
                <Tr>
                  <Td colSpan={props.column.length + 1} textAlign="center">
                    Tidak ada data..
                  </Td>
                </Tr>
              ) : (
                props.data.map((valData: any, key: number) => (
                  <Tr>
                    <Td>{key + 1}</Td>
                    {props.column.map((valColumn: Column) =>
                      !valColumn.render ? (
                        <Td textAlign="center">{valData[valColumn.index]}</Td>
                      ) : (
                        <Td textAlign="center">
                          {valColumn?.render(valData[valColumn.index], valData)}
                        </Td>
                      )
                    )}
                  </Tr>
                ))
              )}
            </Tbody>
            {/* <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot> */}
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default BaseTable;
