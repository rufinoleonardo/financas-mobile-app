import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosResponse } from "axios";

interface userProps {
  id?: string;
  name?: string;
  email: string;
  balance?: number;
  created_at?: Date;
  updated_at?: Date;
  password?: string;
}

interface signInResponseProps {
  data: {
    id: string;
    name: string;
    token: string;
  };
}

interface authContextProps {
  user: userProps | null;
  signed?: boolean;
  loadingAuth?: boolean;
  loadingApp?: boolean;
  signUp?: ({}: userProps) => void;
  signIn?: ({}: userProps) => void;
  signOut?: () => void;
}

const authContext = createContext<authContextProps>({ user: null });

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState<userProps>(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loadingApp, setLoadingApp] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    async function getStoredToken() {
      const token = await AsyncStorage.getItem("@financas_token");

      if (token) {
        const storedUser: void | AxiosResponse<userProps, any> = await api
          .get("/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .catch((err) => {
            setUser(null);
            setLoadingApp(false);
          });

        if (!!storedUser) {
          setUser({
            name: storedUser.data.name,
            email: storedUser.data.email,
            balance: storedUser.data.balance,
            id: storedUser.data.id,
            created_at: storedUser.data.created_at,
            updated_at: storedUser.data.updated_at,
          });
        }
      }

      api.defaults.headers["Authorization"] = `Bearer ${token}`;
      setLoadingApp(false);
    }

    getStoredToken();
  }, []);

  async function signUp(userInput: userProps) {
    setLoadingAuth(true);

    const data: userProps = {
      name: userInput.name,
      email: userInput.email.toLowerCase(),
      password: userInput.password,
    };

    try {
      await api.post("/users", data);
      setLoadingAuth(false);
      navigation.goBack();
    } catch (err) {
      console.log("Erro ao Criar usuário.");
      console.log(err);
      setLoadingAuth(false);
    }
  }

  async function signIn(credentials: Omit<userProps, "name">) {
    setLoadingAuth(true);

    const data = {
      email: credentials.email.toLowerCase(),
      password: credentials.password,
    };

    try {
      const response: signInResponseProps = await api.post("login", data);

      const { id, name, token } = response.data;

      AsyncStorage.setItem("@financas_token", token);

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      setUser({ id, name, email: credentials.email });
    } catch (err) {
      console.log("ERRO AO FAZER LOGIN: ", err);
    }

    setLoadingAuth(false);
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
    <authContext.Provider
      value={{
        signed: !!user,
        user,
        signUp,
        signIn,
        signOut,
        loadingAuth,
        loadingApp,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export { authContext };
