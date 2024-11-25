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
  gap: 0.5rem;
`;

export const ActionButton = styled.div`
  cursor: pointer;  
  font-size: 12px;
  width: 10px;
  height: 10px;
  &.success {
    color: #009f39;
  }

  &.warning {
    color: #ffc107;
  }

  &.danger {
    color: #dc3545;
  }
`;

export const Icon = styled.i`
  margin: 0.5rem;
`;