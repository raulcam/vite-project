import styled from "styled-components"; 

// Contenedor del Modal
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Caja del Modal
export const ModalContainer = styled.div`
  width: 90%;
  max-width: 500px;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Header del Modal
export const ModalHeader = styled.div`
  background-color: ${(props) => props.color};
  color: #fff;
  padding: 16px;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
`;

// Contenido del Modal
export const ModalContent = styled.div`
  padding: 20px;
  text-align: center;
`;

// Botones de Acción
export const ModalActions = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 16px;
  background-color: #f9f9f9;
`;

// Botón Estilizado
export const ActionButton = styled.button`
  padding: 10px 15px;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #fff;

  background-color: ${(props) => props.bgcolor};
  &:hover {
    opacity: 0.8;
  }
`;
