import styled from "styled-components";

export const TableWrapper = styled.div`
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: #888 #f9f9f9;

  
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f9f9f9;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; 
    border-radius: 8px;
    border: 2px solid #f9f9f9;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;

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

  flex: 1;
  min-width: 100px;
  max-width: 120px;
  text-align: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const AddUserButton = styled(AddButton)`
  background-color: #3498db;
`;
