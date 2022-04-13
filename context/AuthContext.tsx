import * as React from "react";
import { AuthContextType, User, PropsWithChildren } from "../@types/auth.d";

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState<User>({ uid: "" });
  const [loading, setLoading] = React.useState(true);

  function signup() {
    return {
      auth: "used sigup",
    };
  }
  function login() {
    return {
      auth: "used login",
    };
  }
  
  const value = {
    signup,
    currentUser,
    login
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
