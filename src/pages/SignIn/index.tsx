import React, { useContext, useState } from "react";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Background,
  Logo,
  TextInput,
  SubmitPressable,
  SubmitText,
  Link,
  LinkText,
  Container,
} from "./styles";

import { authContext } from "../../contexts/auth";

export default function SignIn() {
  const navigation = useNavigation();
  const { loadingAuth, signIn } = useContext(authContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function HandleSubmit() {
    signIn({ email: email, password: password });
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
        enabled
      >
        <Logo source={require("../../../assets/Logo.png")} />
        <TextInput
          placeholder="Seu e-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Senha"
          textContentType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <SubmitPressable onPress={() => HandleSubmit()}>
          <SubmitText>Entrar</SubmitText>
        </SubmitPressable>

        <Link onPress={() => navigation.navigate("Sign Up")}>
          <LinkText>Criar uma conta gratuita</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
