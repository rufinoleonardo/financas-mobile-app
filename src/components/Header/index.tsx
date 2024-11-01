import React from "react";
import { Container, Title, MenuBtn } from "./styles";
import Icon from "@expo/vector-icons/Feather";
import { useNavigation, DrawerActions } from "@react-navigation/native";

export default function Header({ title }) {
  const navigation = useNavigation();

  return (
    <Container>
      <MenuBtn onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Icon name="menu" size={22} color={"#121212"} />
      </MenuBtn>
      {title && <Title>{title}</Title>}
    </Container>
  );
}
