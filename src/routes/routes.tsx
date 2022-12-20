import { Routes as Switch, Route, Navigate } from "react-router-dom";

import { ProtectedRoute, PublicRoute, RoutePaths } from "./";
import { Home, Login } from "../screens";

const Routes = () => {
  return (
    <Switch>
      <Route element={<ProtectedRoute />}>
        <Route path={RoutePaths.home} element={<Home />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Route>
      <Route element={<PublicRoute />}>
        <Route path={RoutePaths.login} element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    </Switch>
  );
};

export default Routes;
