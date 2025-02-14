import styled from "styled-components";
import PropTypes from "prop-types";

function NavBar({
  data = { username: '', name: '', role: null },
  handleLogout,
}) {
  return (
    <Nav>
      <div className="contentCredential">
        <p className="username">{data.username || data.name}</p>
        <p className="role">{data.role}</p>
      </div>

      <StyledButton onClick={() => handleLogout()}>
        Cerrar sesion
      </StyledButton>
    </Nav>
  );
}

export default NavBar;

NavBar.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
  }),
  handleLogout: PropTypes.func.isRequired,
};

const Nav = styled.div`
  display: flex;
  width: 100%;
  max-height: 46px;
  background: #117afa;
  justify-content: end;
  align-items: center;
  padding: 2rem;
  gap: 32px;

  .contentCredential{
    
    .username{
      font-weight: 600;
      font-size: 20px;
      color:#FFFFFF;
    }
    .role{
      font-size: 14px;
      font-weight: 300;
      color:#FFFFFF;
    }
  }
`;

const StyledButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d9363e;
  }

  &:active {
    background-color: #a82a2f;
  }

  &:focus {
    outline: none;
  }
`;
