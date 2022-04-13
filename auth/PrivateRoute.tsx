import * as React from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import Login from "@pages/login";

const PrivateRoute: React.FC<any> = (
  Component: React.ComponentType<any>
): any => {
  const token = true;
  const Auth: React.FC = (props): JSX.Element => {
    if (token) {
      return <Login />;
    } else return <Component {...props} />;
  };
  return Auth;
};

export default PrivateRoute;
