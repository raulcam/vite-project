import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalActions,
  ActionButton,
} from "./modal.styles";
import { Input } from "../../atoms/input/input";

// Componente Modal

const Modal = ({
  isOpen,
  onClose,
  mode,
  itemData,
  onAction,
  setinput,
  input,
  setAddUser,
  addUser,
}) => {
  if (!isOpen) return null;

  // Configuración de colores y mensajes según la bandera
  const modalSettings = {
    view: {
      title: "Ver Datos",
      color: "#4caf50",
      buttonText: "Cerrar",
    },
    edit: {
      title: "Editar Datos",
      color: "#ff9800",
      buttonText: "Guardar",
    },
    delete: {
      title: "Eliminar Datos",
      color: "#f44336",
      buttonText: "Eliminar",
    },
    add: {
      title: "Agregar usuario",
      color: "#5dade2",
      buttonText: "Agregar",
    },
  };

  const { title, color, buttonText } = modalSettings[mode] || {};

  const handleChange = () => {
    switch (mode) {
      case "view":
        return (
          <span>
            <p>Nombre: {itemData.name}</p>
            <p>Usuario: {itemData.username}</p>
            <p>Telefono: {itemData.phone}</p>
            <p>Correo: {itemData.email}</p>
          </span>
        );

      case "edit":
        return (
          <Input
            type="text"
            value={input}
            onChange={(e) => setinput(e.target.value)}
            defaultValue={itemData.name}
            placeholder="Editar datos"
          />
        );

      case "delete":
        return (
          <div>
            ¿Estás seguro de que deseas eliminar el siguiente item?
            <br />
            <div>
              <p>Nombre: {itemData.name}</p>
              <p>Usuario: {itemData.username}</p>
            </div>
          </div>
        );

      case "add":
        return (
          <>
            <Input
              type="text"
              value={addUser.name}
              onChange={(e) => setAddUser({...addUser, name: e.target.value })}
              placeholder="Agrega tu nombre"
            />

            <Input 
              type="email"
              value={addUser.email}
              onChange={(e) => setAddUser({...addUser, email: e.target.value })}
              placeholder="Agrega tu correo"
            />

            <Input
              type="password"
              value={addUser.password}
              onChange={(e) => setAddUser({...addUser, password: e.target.value })}
              placeholder="Agrega tu contraseña"
            />
          </>
        );

      default:
        break;
    }
  };
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader color={color}>{title}</ModalHeader>
        <ModalContent>{handleChange(mode)}</ModalContent>
        <ModalActions>
          <ActionButton bgcolor={"grey"} onClick={onClose}>
            Cancelar
          </ActionButton>
          <ActionButton
            bgcolor={color}
            onClick={() => onAction(mode, itemData)}
          >
            {buttonText}
          </ActionButton>
        </ModalActions>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
