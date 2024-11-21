import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { singOut } from "../../../reducers/auth";

export const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(singOut());
    navigate('/login')
  };
  return (
    <Nav>
      <p>Navbar</p>
      <button onClick = {()=>handleLogout()} className="buttonLogOut">Cerrar sesion</button>
    </Nav>
  );
};

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
