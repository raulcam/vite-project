import { useEffect, useState } from "react";
import {
  Container,
  CardBody,
  TableWrapper,
  Table,
  TableHead,
  TableBody,
  PaginationWrapper,
} from "../styles/table.styles";
import ItemsRows from "../../componets/rows/ItemsRows";

export const DashboardContent = () => {
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalDetail, setModalDetail] = useState(false);
  return (
    <Container>
      <CardBody>
        {/* Aquí puedes añadir contenido adicional */}

        <TableWrapper>
          <Table>
            <TableHead>
              <tr>
                <th>Nombre</th>
                <th>Usuario</th>
                <th>Telefono</th>
                <th>Correo ele.</th>
                <th>Estatus</th>
                <th>Es usuario</th>
                <th>Acciones</th>
              </tr>
            </TableHead>
            <TableBody>
              <ItemsRows
                setModalEdit={() => console.log("Editar en el inventario")}
                setModalDelete={() => console.log("Eliminar del inventario")}
                setModalDetail={() => console.log("Ver detalles")}
              />
            </TableBody>
          </Table>
        </TableWrapper>

        {/* <PaginationWrapper numberPage={5} /> */}
      </CardBody>
    </Container>
  );
};

