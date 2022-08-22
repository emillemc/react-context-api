import { createContext, useContext } from "react";

interface AuthContextData {
  isAuthenticated: boolean;
  user: object | null;
  Login(user: object): Promise<void>;
  Logout(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
