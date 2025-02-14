import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({element, requiredRoles }) => {
    const user = useSelector((state) => state.user);
    const userRole = user.data.role;

  if (!user || !requiredRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  } else {
    return element;
  }
};

export default ProtectedRoute;
