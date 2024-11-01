import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { authContext } from "../contexts/auth";

export default function Routes() {
  const { signed, loadingApp } = useContext(authContext);

  if (loadingApp) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} color="#131313" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
