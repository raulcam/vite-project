import { useEffect, useState } from "react";
import {
  Container,
  CardBody,
  TableWrapper,
  Table,
  TableHead,
  TableBody,
} from "../styles/table.styles";
import ItemsRows from "../../componets/rows/ItemsRows";
import api from "../../api/api";

export const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("view"); // "view", "edit", "delete"
  const [selectedItem, setSelectedItem] = useState();
  const [input, setinput] = useState('');
  const [isSuccess, setIsSuccess] = useState({
    isDelete: false,
    isEdit: false,
  });

  const [data, setData] = useState({
    isFeching: true,
    users: [],
  });

  useEffect(() => {
    getUsers();
  }, [isSuccess?.isDelete, isSuccess?.isEdit]);

  const getUsers = async () => {
    try {
      let res = await api.get("/users");
      if (res.status == 200) {
        setData({ ...data, isFeching: false, users: res.data });
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

  const closeModal = () => setIsModalOpen(false);

  const handleAction = (mode, item) => {
    if (mode === "edit") {
      putUsers(item);
    } else if (mode === "delete") {
      deleteUsers(item);
    }
    closeModal();
  };
  
  const putUsers = async (item) => {
    
    try {
      setIsSuccess({ ...isSuccess, isEdit: false });
      let body = {
        name: input
      }
      let res = await api.put(`/users/${item.id}`, body);
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
      let res = await api.delete(`/users/${item.id}`);
      if (res.status == 200) {
        setIsSuccess({ ...isSuccess, isDelete: true });
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <CardBody>
        <h1>Tabla de Usuarios</h1>

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
                data={data}
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

        {/* <PaginationWrapper numberPage={5} /> */}
      </CardBody>
    </Container>
  );
};
