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
} from "@chakra-ui/react";

interface Column {
  index?: string;
  title: string;
  render?: React.ReactNode;
}

interface Props {
  column: Column[];
  data?: any;
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
                {props.column.map((val) => (
                  <Th textAlign="center">{val.title}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {props.data.map((valData) => (
                <Tr>
                  {props.column.map((valColumn) =>
                    !valColumn.render ? (
                      <Td textAlign="center">{valData[valColumn?.index]}</Td>
                    ) : (
                      <Td textAlign="center">
                        {valColumn.render(valData[valColumn?.index], valData)}
                      </Td>
                    )
                  )}
                </Tr>
              ))}
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
