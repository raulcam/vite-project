import styled from "styled-components";

function Siderbar({ isExpanded, toggleSidebar }) {
  return (
    <SidebarContainer>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isExpanded ? "Cerrar" : "Abrir"}
      </button>
      <div style={{ padding: "8px 8px 8px 8px" }}>
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Usuarios</li>
            <li>Configuraciones</li>
          </ul>
        </nav>
      </div>
    </SidebarContainer>
  );
}

export default Siderbar;

const SidebarContainer = styled.div`
  width: ${(props) => (props.isExpanded ? "320px" : "100px")};
  height: 100vh;
  background-color: #2c3e50;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 0.3s ease;

  .toggle-button {
    margin: 10px;
    padding: 5px 10px;
    cursor: pointer;
    background-color: #3498db;
    border: none;
    color: white;
    border-radius: 5px;
  }

  nav ul {
    list-style: none;
    padding: 0;
    width: 100%;
  }

  nav ul li {
    padding: 10px;
    text-align: center;
    cursor: pointer;
    transition: background 0.3s;
  }

  nav ul li:hover {
    background: #34495e;
  }
`;
