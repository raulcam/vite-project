import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { restoreToken, setToken } from "../reducers/auth";
import Siderbar from "./components/navigation/SideBar";
import NavBar from "./components/navigation/NavBar";


export const Wrapper = () => {
  const dispatch = useDispatch();
  const { userToken, isLoding } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(setToken(userToken));
  }, [dispatch]);

  useEffect(() => {
    getUserToken();
  }, []);

  async function getUserToken() {
    try {
      const value = await localStorage.getItem("@token");
      
      if (value !== null || value !== undefined) {
        dispatch(restoreToken(value));
      } else {
        dispatch(restoreToken(null));
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (isLoding) return <div>Loading....</div>;
  
  
  return (
    <>
      {userToken !== undefined || userToken !== null ? (
        <div className="wrapper" style={{ alignItems: "baseline" }}>
          <Siderbar/>
          <div className="main">
            <NavBar/>
            <main className="content">
              <Outlet />
            </main>
            {/* <Footer /> */}
          </div>
        </div>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};
