import React, { useContext, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

import {
  Background,
  Container,
  TextInput,
  SubmitPressable,
  SubmitText,
} from "../SignIn/styles";
import { authContext } from "../../contexts/auth";

export default function SignUp() {
  const { user, signUp, loadingAuth } = useContext(authContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    if (name == "" || email == "" || password == "") {
      console.log("Required filds are empty.");
      return;
    }
    signUp({ name, email, password });
  }

  return (
    <Background>
      <Container>
        <TextInput
          placeholder="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <SubmitPressable onPress={() => handleSubmit()}>
          {loadingAuth ? (
            <ActivityIndicator size={22} color={"#FFF"} />
          ) : (
            <SubmitText>Registrar</SubmitText>
          )}
        </SubmitPressable>
      </Container>
    </Background>
  );
}

// TODO: CRIAR CONTEXTO EM UMA PASTA contexts PARA ARMAZENAR DADOS DO USER APÓS O LOGIN.
