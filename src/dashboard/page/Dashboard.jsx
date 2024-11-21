import { Navigate, Outlet } from "react-router-dom";
import { Siderbar } from "../components/navigation/SideBar";
import { NavBar } from "../components/navigation/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { restoreToken, fetchData, setToken } from "../../reducers/auth";
import api from "../../api/api";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { userToken, isLoding } = useSelector((state) => state.auth);
  console.log(userToken);

  useEffect(() => {
    const fakeToken = "123"; // Este sería el token generado en el login
    dispatch(setToken(fakeToken));
  }, [dispatch]);

  const handleFetchData = () => {
    dispatch(fetchData());
  };

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      let res = await api.get("/data");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getUserToken();
  // }, []);

  // async function getUserToken() {
  //   try {
  //     const value = await localStorage.getItem("@token");
  //     if (value !== null) {
  //       dispatch(restoreToken(value));
  //     } else {
  //       dispatch(restoreToken(null));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  if (isLoding) return <div>Loading....</div>;

  return (
    <>
      {userToken ? (
        <div className="wrapper" style={{ alignItems: "baseline" }}>
          <Siderbar />
          <div className="main">
            <NavBar />
            <main className="content">
              <Outlet />
              <button onClick={handleFetchData} disabled={isLoding}>
                {isLoding ? "Cargando..." : "Obtener Datos"}
              </button>
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
