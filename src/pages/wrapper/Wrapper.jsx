import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Siderbar from "../../components/molecules/SideBar/SideBar";
import NavBar from "../../components/molecules/NavBar/NavBar";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { restoretoken, singOut } from "../../reducers/auth";
import { verifyToken } from "../../reducers/user";

export const Wrapper = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);


  const { token, isLoading } = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.user);
  const value = localStorage.getItem("@token");

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    if (value) {
      dispatch(verifyToken(value));
    }
  }, [dispatch]);

  async function getToken() {
    try {
      if (value !== null || value !== undefined) {
        dispatch(restoretoken(value));
      } else {
        dispatch(restoretoken(null));
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogout = () => {
    dispatch(singOut());
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      {token !== undefined || token !== null ? (
        <Layout>
          <Siderbar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar}/>
          <div className="flex">
            <NavBar data={data} handleLogout={handleLogout} />
            <div className="main-content">
              <Outlet />
            </div>
          </div>
        </Layout>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

const Layout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100vh;

  .flex {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .main-content {
    flex: 1;
    height: 100vh;
    overflow: auto;
    transition: margin-left 0.3s ease; /* Transición suave */
  }
`;
