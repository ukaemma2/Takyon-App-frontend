import * as React from "react";

import type { AppProps } from "next/app";

import { Route, Redirect } from "react-router-dom";


const PrivateRoute : React.FC<any> = (Component: React.ComponentType<any>):any => {
  // localStorage.setItem("")
  // const stoken = localStorage.getItem("auth") || ""

  // localStorage.getItem("auth")
  const token =false

  const Auth :React.FC=(props):JSX.Element=>{
    if (token) {
      return (
        <p>Login</p>
      );
    }
    else return <Component {...props} />
      
    
  }
  return Auth;
  


}

export default PrivateRoute;