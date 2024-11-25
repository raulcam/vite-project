import React, { useEffect, useState  } from "react";
import {
  TableRow,
  TableData,
  ActionButton,
  ActionContainer,
} from "../items.styles";
import { fetchData } from "../../reducers/auth";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api/api";

const inventory = [
  {
    id: 1,
    name: "admin",
    username: "admin",
    password: "admin123",
    phone: "5584789865",
    email: "admin@gmail.com",
    status: 1,
    isUser: false,
    createAt: "05/05/2024",
    updateAt: "06/07/2024",
  },
  {
    id: 2,
    name: "admin",
    username: "admin",
    password: "admin123",
    phone: "5584789865",
    email: "admin@gmail.com",
    status: 1,
    isUser: false,
    createAt: "05/05/2024",
    updateAt: "06/07/2024",
  },
  {
    id: 3,
    name: "admin",
    username: "admin",
    password: "admin123",
    phone: "5584789865",
    email: "admin@gmail.com",
    status: 1,
    isUser: false,
    createAt: "05/05/2024",
    updateAt: "06/07/2024",
  },
  {
    id: 4,
    name: "admin",
    username: "admin",
    password: "admin123",
    phone: "5584789865",
    email: "admin@gmail.com",
    status: 1,
    isUser: false,
    createAt: "05/05/2024",
    updateAt: "06/07/2024",
  },
];

const ItemsRows = ({ setModalEdit, setModalDelete, setModalDetail }) => {
  const [data, setData] = useState({
    isFeching: true,
    users:[],
  });
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      let res = await api.get("/users");
      if (res.status == 200) {
        setData({...data, isFeching:false, users: res.data})
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelUser = (isuser) => {
    if (isuser) {
      return "Si";
    } else {
      return "No";
    }
  };
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
          <TableData>{handelUser(element.isUser)}</TableData>
          {/* Actions */}
          <TableData>
            <ActionContainer>
              <ActionButton
                className="success"
                title="Ver"
                onClick={() => setModalDetail(true)}
              >
                correcto
              </ActionButton>
              <ActionButton
                className="warning"
                title="Editar"
                onClick={() => setModalEdit(true)}
              >
                editar
              </ActionButton>
              <ActionButton
                className="danger"
                title="Eliminar"
                onClick={() => setModalDelete(true)}
              >
                eliminar
              </ActionButton>
            </ActionContainer>
          </TableData>
        </TableRow>
      ))}
    </>
  );
};

export default ItemsRows;
