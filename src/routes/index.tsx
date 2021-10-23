import { Route, Switch } from "react-router-dom";
import { Login } from "../pages";
import { LOGIN } from "./paths";

const Routes = () => (
  <Switch>
    <Route path={LOGIN} component={Login} />
  </Switch>
);

export default Routes;
