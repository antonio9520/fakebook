import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Dashboard, Profile } from "../pages";
import { DASHBOARD, PROFILE } from "./paths";

const PrivateRoute = ({ ...props }) => {
  const auth = true;
  const loading = false;
  // const auth = false;
  //   useEffect(() => {
  //     dispatch(usuarioAuthAction());
  //     document.title = "ZAPTalent - Usuarios";
  //     // eslint-disable-next-line
  //   }, []);

  return (
    <>
      <Route
        {...props}
        render={() =>
          !auth && !loading ? (
            <Redirect to="/login" />
          ) : (
            <Switch>
              <Route path={DASHBOARD} component={Dashboard} />
              <Route path={PROFILE} component={Profile} />
            </Switch>
          )
        }
      />
    </>
  );
};

export default PrivateRoute;
