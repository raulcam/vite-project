import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { singOut } from "../../../reducers/auth";

function NavBar(){
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(singOut());
    navigate('/login')
  };
  return (
    <Nav>
      <p>Navbar</p>
      <StyledButton onClick = {()=>handleLogout()} className="buttonLogOut">Cerrar sesion</StyledButton>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.div`
  display: flex;
  background: #acf053;
  justify-content: space-between;
  align-items: center;
  .buttonLogOut {
    width: 10%;
    height: 35px;
    margin: 0px 10px 0px 0px;
    border-radius: 5px;
    border: none;
    background: #a2cae6;
    cursor: pointer;
    &:hover{
        background: #4699e7;
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
