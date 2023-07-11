import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import "../categoriesPage/Categories.css";
import Sidebar from "../../components/sidebar/Sidebar";

const Categories = () => {
  return (
    <div className="categories">
      <Sidebar />

      <div className="table-container">
        <h1>CATEGORIES</h1>

        {/*=============================== Item Table ===========================*/}
        <TableContainer className="table">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>cATEGORY ID</Th>
                <Th>CATEGORY NAME</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Laborbedarf</Td>
              </Tr>

              <Tr>
                <Td>2</Td>
                <Td>Reinraumbedarf</Td>
              </Tr>

              <Tr>
                <Td>3</Td>
                <Td>IT-Bedarf</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        {/*=============================================================================*/}
      </div>
    </div>
  );
};

export default Categories;
