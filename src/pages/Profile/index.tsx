import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import {
  Background,
  Container,
  LogoutBtn,
  LogoutText,
  RegisterBtn,
  RegisterText,
  Saudacao,
  UsersName,
} from "./styles";
import { useContext } from "react";
import { authContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const { user, signOut } = useContext(authContext);
  const navigation = useNavigation();

  return (
    <Background>
      <SafeAreaView>
        <Header title={"Perfil"} />
        <Container>
          <Saudacao>Bem vindo de volta</Saudacao>
          <UsersName>{user.name}</UsersName>

          <RegisterBtn onPress={() => navigation.navigate("Registrar")}>
            <RegisterText>Registrar movimentação</RegisterText>
          </RegisterBtn>

          <LogoutBtn onPress={() => signOut()}>
            <LogoutText>Sair</LogoutText>
          </LogoutBtn>
        </Container>
      </SafeAreaView>
    </Background>
  );
}
