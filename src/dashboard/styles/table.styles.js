import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  padding: 0 1rem;
`;

export const CardBody = styled.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TableWrapper = styled.div`
  margin-top: 1rem;
  overflow-x: auto;

    /* Estilo responsivo para el contenedor */
    @media (max-width: 768px) {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
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