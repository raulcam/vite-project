import { useState, useEffect } from "react";
import Container from "../../components/molecules/container/container";
import {
  AddUserButton,
  Table,
  TableWrapper,
  TableHead,
  TableBody,
  PaginationWrapper,
  AddButton,
} from "../../components/molecules/table/table.styles";
import ItemsRows from "../../components/molecules/rows/ItemsRows";
import Modal from "../../components/molecules/modalForm/ModalForm";
import api from "../../api/api";
import { useSelector } from "react-redux";

function ListUsers() {
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("view");
  const [selectedItem, setSelectedItem] = useState();
  const [input, setinput] = useState("");
  const [addUser, setAddUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSuccess, setIsSuccess] = useState({
    isDelete: false,
    isEdit: false,
    isAdd: false,
  });

  const [data, setData] = useState({
    isFeching: true,
    users: [],
  });

  useEffect(() => {
    getUsers();
  }, [isSuccess?.isDelete, isSuccess?.isEdit, isSuccess?.isAdd]);

  const getUsers = async () => {
    try {
      let res = await api.get("/users");

      if (res.status == 200) {
        setData({ ...data, isFeching: false, users: res.data.users });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = (mode, item) => {
    setModalMode(mode);
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const putUsers = async (item) => {
    try {
      setIsSuccess({ ...isSuccess, isEdit: false });
      let body = {
        name: input,
      };
      let res = await api.put(`/users/${item._id}`, body);
      console.log(res);

      if (res.status == 200) {
        setIsSuccess({ ...isSuccess, isEdit: true });
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUsers = async (item) => {
    try {
      setIsSuccess({ ...isSuccess, isDelete: false });
      let res = await api.delete(`/users/${item._id}`);
      if (res.status == 200) {
        setIsSuccess({ ...isSuccess, isDelete: true });
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddUsers = async () => {
    try {
      setIsSuccess({ ...isSuccess, isAdd: false });
      let newUser = {
        name: addUser.name,
        email: addUser.email,
        password: addUser.password,
      };
      let res = await api.post(`/users`, newUser);
      setIsSuccess({ ...isSuccess, isAdd: true });
      setAddUser({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      setAddUser({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  const handleAction = (mode, item) => {
    if (mode === "edit") {
      putUsers(item);
    } else if (mode === "delete") {
      deleteUsers(item);
    } else if (mode === "add") {
      handleAddUsers();
    }
    closeModal();
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <Container type={"templateListUsers"}>
      <div className="actions">
        <h1>Tabla de Usuarios</h1>
        <AddUserButton onClick={() => openModal("add")}>Agregar</AddUserButton>
      </div>

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
              <th>Role</th>
            </tr>
          </TableHead>
          <TableBody>
            <ItemsRows
              data={data?.users}
              openModal={openModal}
              handleAction={handleAction}
              isModalOpen={isModalOpen}
              modalMode={modalMode}
              closeModal={closeModal}
              selectedItem={selectedItem}
              setinput={setinput}
              input={input}
            />
          </TableBody>
        </Table>
      </TableWrapper>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        mode={modalMode}
        itemData={selectedItem}
        onAction={handleAction}
        setinput={setinput}
        setAddUser={setAddUser}
        addUser={addUser}
        handleAddUsers={handleAddUsers}
      />
    </Container>
  );
}

export default ListUsers;
