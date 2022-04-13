import * as React from "react";
import {
  AuthContextType,
  User,
  PropsWithChildren,
  Token,
} from "../@types/auth.d";

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState<User>({ uid: "" });
  // const [token, setToken] = React.useState<string|null>();
  const [loading, setLoading] = React.useState(true);

  // React.useEffect(() => {
  //   const item = localStorage.getItem("auth");
  //   if (item) {
  //     setToken(item);
  //   }
  //   console.log(item);
  // }, []);
  const token = false

  function signup() {
    return {
      auth: "used sigup",
    };
    //create account
    //add token to localstorage
  }

  function login() {
    return {
      auth: "used login",
    };
  }

  const value = {
    signup,
    currentUser,
    login,
    token,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
