import "./gesture-handler";

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { AuthContextProvider } from "./src/contexts/auth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <StatusBar backgroundColor="#F0F4FF" style="dark" />
        <Routes />
      </AuthContextProvider>
    </NavigationContainer>
  );
}
