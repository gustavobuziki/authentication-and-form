import { Routes as Switch, Route } from "react-router-dom";

import { ProtectedRoute, PublicRoute, RoutePaths } from "./";
import { Home, Login } from "../screens";

const Routes = () => {
  const authenticated = true;

  return (
    <Switch>
      <Route element={<ProtectedRoute authenticated={authenticated} />}>
        <Route path={RoutePaths.home} element={<Home />} />
      </Route>
      <Route element={<PublicRoute authenticated={authenticated} />}>
        <Route path={RoutePaths.login} element={<Login />} />
      </Route>
    </Switch>
  );
};

export default Routes;
