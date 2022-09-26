import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../context/auth-context";

const ProtectedRoute = () => {
  const { authenticated } = useContext(AuthContext);

  return authenticated ? <Outlet /> : <Navigate to={"login"} />;
};

export default ProtectedRoute;
