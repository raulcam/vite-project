import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  margin: 0;
`;

export const ImageSection = styled.div`
  position: relative;
  flex: 1;
  display: none;

  @media (min-width: 992px) {
    display: block;
  }
`;

export const ImageHolder = styled.div`
  background-size: cover; 
  background-position: center;
  height: 100%;
`;

export const FormSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  @media (min-width: 576px) {
    padding: 0;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

export const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  img {
    width: 60px;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  color: #6c757d; /* Text-secondary */
  margin-bottom: 2rem;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  .input-group-text {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background-color: #f8f9fa;
    border: 1px solid #ced4da;
  }

  input {
    flex: 1;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  .form-check {
    display: flex;
    align-items: center;

    .form-check-input {
      margin-right: 0.25rem;
    }

    .form-check-label {
      color: #6c757d; /* Text-secondary */
      font-size: 0.875rem;
    }
  }

  a {
    font-size: 0.875rem;
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff; /* Btn-primary */
  border: none;
  border-radius: 0.25rem;
  margin-bottom: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

export const FooterText = styled.div`
  font-size: 0.875rem;

  a {
    font-weight: bold;
    color: #007bff;

    &:hover {
      text-decoration: underline;
    }
  }
`;
