import {
  TableRow,
  TableData,
  ActionContainer,
  ViewButton,
  EditButton,
  DeleteButton,
} from "./items.styles";
import { handelUser } from "../../../tools/metods";

const ItemsRows = (props) => {
  const { data, openModal } = props;

  return (
    <>
      {data?.map((element, index) => {
        if (element.role === "user") {
          console.log(element);
          
          return (
            <TableRow key={index}>
              <TableData>{element.name}</TableData>
              <TableData>{element.username}</TableData>
              <TableData>{element.phone}</TableData>
              <TableData>{element.email}</TableData>
              <TableData>{element.status}</TableData>

              <TableData>{handelUser(element.isUser)}</TableData>

              <TableData>
                <ActionContainer>
                  <ViewButton
                    title="Ver"
                    onClick={() => openModal("view", element)}
                  >
                    Correcto
                  </ViewButton>
                  <EditButton
                    title="Editar"
                    onClick={() => openModal("edit", element)}
                  >
                    Editar
                  </EditButton>
                  <DeleteButton
                    title="Eliminar"
                    onClick={() => openModal("delete", element)}
                  >
                    Eliminar
                  </DeleteButton>
                </ActionContainer>
              </TableData>
              <TableData>{element.role}</TableData>
            </TableRow>
          );
        }
      })}
    </>
  );
};

export default ItemsRows;
