import logo from "./logo.svg";

import { useDispatch } from "react-redux";

import { Switch, BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import AuthRoute from "./util/AuthRouter";
import PrivateRoute from "./util/PrivateRouter";
import Admin from "./pages/Admin";

import { SET_ADMIN } from "./store/admin/types";

// import UserTable from "./Components/Table/UserTable";
import React, { Fragment, useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch({ type: SET_ADMIN, payload: token });
  }, [token, dispatch]);
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/admin" component={Admin} />
        <AuthRoute exact path="/" component={Login} />
        <AuthRoute exact path="/login" component={Login} />
        <Route exact path="/forgot" component={ForgotPassword} />
        {/* <Route exact path="/profile" component={Profile} /> */}
        <Route exact path="/change/:id" component={ChangePassword} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
