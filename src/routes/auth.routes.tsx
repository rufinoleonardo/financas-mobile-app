import React, { ReactNode } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Sign In"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Sign Up"
        component={SignUp}
        options={{
          title: "Voltar",
          headerStyle: {
            backgroundColor: "#3b3dbf",
          },
          headerTintColor: "#FFF",
          headerBackTitleVisible: false,
        }}
      />
    </AuthStack.Navigator>
  );
}
