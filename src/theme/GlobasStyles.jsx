import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`    
  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }

  body{
    font-family: 'Poppins', sans-serif;
    background-color: #F0F0F1;       
  }

  [data-slate-editor] p {
    margin-bottom: 0;
  }
  
  [data-slate-editor] > * + * {
    margin-top: 1em;
  }

  /* [data-slate-editor] table {
    width:100%;
    table-layout: fixed;
    overflow-wrap: break-word;

    td {
      display: table-cell;
      text-align: left;
      vertical-align: top;
      padding: 0.75rem;
      border:1px dotted #CFCFCF
    }
  } */
`;
export default GlobalStyle;
