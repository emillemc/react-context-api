import React, { useEffect, useState } from "react";
import api from "../services/api";
import { AuthContext } from "./AuthContext";

interface Props {
  children?: React.ReactNode;
}

interface LoginProps {
  email: string;
  password: string;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function Login(userData: LoginProps) {
    const response = await api.post("/login", userData);
    setUser(response.data.user);
    localStorage.setItem("@User:access_token", response.data.access_token);
    setIsAuthenticated(true);
  }

  async function Logout() {
    // api.post("auth/logout", token);
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("@User:access_token");
  }

  const verifyStorageToken = async () => {
    const storageToken = localStorage.getItem("@User:access_token");

    if (storageToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    verifyStorageToken();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};


