import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  padding: 0 1rem;
  width: 100%;
`;

export const CardBody = styled.div`
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  .actions{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const TableWrapper = styled.div`
  margin-top: 1rem;
  overflow-x: auto;

 
    scrollbar-width: thin; /* Para navegadores compatibles (Firefox) */
    scrollbar-color: #888 #f9f9f9; /* Colores del scrollbar en Firefox */

    /* Chrome, Edge y otros basados en WebKit */
    &::-webkit-scrollbar {
      width: 8px; /* Ancho del scrollbar */
    }

    &::-webkit-scrollbar-track {
      background: #f9f9f9; /* Color del fondo del track */
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #888; /* Color de la barra */
      border-radius: 8px;
      border: 2px solid #f9f9f9; /* Da un efecto de separación */
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #555; /* Color al pasar el mouse */
    }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px; /* Asegura que haya un ancho mínimo en pantallas pequeñas */
  
  th,
  td {
    padding: 0.75rem;
    text-align: center;
    border: 1px solid #ddd;
  }

  th {
    background-color: #007bff;
    color: #fff;
  }

  td {
    background-color: #f9f9f9;
  }

  /* Alternar colores para filas */
  tr:nth-child(even) td {
    background-color: #f1f1f1;
  }
`;

export const TableHead = styled.thead`
  background-color: #007bff;

  th {
    color: #fff;
    text-align: center;
    padding: 0.75rem;
  }
`;

export const TableBody = styled.tbody`
  .row-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;

    i {
      cursor: pointer;
      font-size: 20px;
    }
  }
`;

export const PaginationWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;

  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      margin: 0 0.25rem;

      a {
        display: block;
        padding: 0.5rem 0.75rem;
        border-radius: 4px;
        text-decoration: none;
        color: #007bff;

        &:hover {
          background-color: #f8f9fa;
        }

        &.active {
          background-color: #007bff;
          color: #fff;
        }
      }
    }
  }
`;

export const AddButton = styled.button`

  font-size: 0.9rem;
  padding: 10px 15px 10px 15px;
  border-radius: 8px;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;


  flex: 1; /* Ocupa el mismo espacio que otros botones en el grupo */
  min-width: 100px; /* Ancho mínimo del botón */
  max-width: 120px; /* Ancho máximo */
  text-align: center;

  &:hover {
    opacity: 0.8; /* Efecto al pasar el mouse */
  }

  &:active {
    transform: scale(0.95); /* Efecto de clic */
  }
`;

export const AddUser = styled(AddButton)`
  background-color: #3498db; /* Verde */
`;