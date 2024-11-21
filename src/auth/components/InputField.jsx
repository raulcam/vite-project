import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

// Estilo de la etiqueta
const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${(props) => (props.error ? "red" : "#333")};
`;

// Estilo del input
const StyledInput = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid ${(props) => (props.error ? "red" : "#ccc")};
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${(props) => (props.error ? "red" : "#007bff")};
  }
`;

// Estilo del mensaje de error
const ErrorMessage = styled.span`
  font-size: 0.875rem;
  color: red;
  margin-top: 0.25rem;
`;

const InputField = (props) => {
  const {
    label,
    name,
    register,
    error,
    type = "text",
    placeholder = "",
  } = props;
  return (
    <InputContainer>
      <Label htmlFor={name} error={error}>
        {label}
      </Label>
      <StyledInput
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        error={!!error}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default InputField;
