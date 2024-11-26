import styled from "styled-components";

// Styled-components
export const TableRow = styled.tr`
  text-align: center;
`;

export const TableData = styled.td`
  padding: 0.5rem;
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px 20px 5px 5px;
  gap: 10px;
  
`;

export const ActionButton = styled.button`

  font-size: 0.9rem;
  padding: 10px 15px 10px 15px;
  border-radius: 8px;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;


  flex: 1; /* Ocupa el mismo espacio que otros botones en el grupo */
  min-width: 100px; /* Ancho mínimo del botón */
  max-width: 200px; /* Ancho máximo */
  text-align: center;

  &:hover {
    opacity: 0.8; /* Efecto al pasar el mouse */
  }

  &:active {
    transform: scale(0.95); /* Efecto de clic */
  }
`;

export const ViewButton = styled(ActionButton)`
  background-color: #4caf50; /* Verde */
`;

export const EditButton = styled(ActionButton)`
  background-color: #ff9800; /* Naranja */
`;

export const DeleteButton = styled(ActionButton)`
  background-color: #f44336; /* Rojo */
`;

export const Icon = styled.i`
  margin: 0.5rem;
`;