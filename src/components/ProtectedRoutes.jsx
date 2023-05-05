import { UserAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({ children }) => {
  const { user } = UserAuth();
  if (user) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};
export default ProtectedRoutes;
