import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../context/auth-context";

const PublicRoute = () => {
  const { authenticated } = useContext(AuthContext);

  return authenticated ? <Navigate to={"/home"} /> : <Outlet />;
};

export default PublicRoute;
