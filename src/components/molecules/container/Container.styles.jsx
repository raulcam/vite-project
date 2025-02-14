import styled, { css } from "styled-components";

const baseStylesContainerStyles = css`
  max-width: ${(props) => props.maxWidth ?? "1122px"};
  min-width: ${(props) => props.minWhidth ?? "1000px"};
  /* margin: 0px auto; */
`;

//Container default que se muestra si no detecta algun elemento en diccionario
export const ContainerStyles = styled.div`
  ${baseStylesContainerStyles}
`;

//Templatedasboard
export const TemplateDasboardContainer = styled.div`
  ${baseStylesContainerStyles}

  margin: 32px auto;
  display: flex;
  flex-direction: column;
  gap: 32px;

  .title{
    display: flex;
    flex-direction: row;
  }

  .contentCards{
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 10px;

    &__card{
      border: solid 1px black;
      background-color: lightgrey;
      border-radius: 8px;
      height: auto;
    }
  }

`;

//Template Lista de usuarios
export const TemplateListContainer = styled.div`
  ${baseStylesContainerStyles}

  margin: 32px auto;
  display: flex;
  flex-direction: column;
  gap: 32px;

  .actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
