export type User = {
  uid: string;
};
export type PropsWithChildren<P> = P & { children?: React.ReactNode };

export type AuthContextType = {
  currentUser: User;
  signup: (name: string, surname: string, email: any, password: any) => {};
  login: (email: any, password: any) => {};
//   resetPassword: (email: any) => {};
//   updateEmail: (email: any) => {};
//   updatePassword: (password: any) => {};
//   getLoggedIn: (uid: string) => {};
//   logout: () => {};
};
