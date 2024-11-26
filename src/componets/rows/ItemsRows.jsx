import {
  TableRow,
  TableData,
  ActionContainer,
  ViewButton,
  EditButton,
  DeleteButton,
} from "./items.styles";
import Modal from "../modalForm/ModalForm";
import { handelUser } from "../../tools/metods";

const ItemsRows = (props) => {
  const {
    data,
    openModal,
    isModalOpen,
    modalMode,
    closeModal,
    selectedItem,
    handleAction,
    setinput
  } = props;


 
  return (
    <>
      {data?.users?.map((element) => (
        <TableRow key={element.id}>
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
        </TableRow>
      ))}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        mode={modalMode}
        itemData={selectedItem}
        onAction={handleAction}
        setinput={setinput}

      />
    </>
  );
};

export default ItemsRows;
