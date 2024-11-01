import { useState } from "react";
import { RegisterContainer, RegisterTypeBtn, RegisterLabel } from "./styles";
import Feather from "@expo/vector-icons/Feather";

export function RegisterTypes({ type, sendTypeChanged }) {
  const [checkedType, setCheckedType] = useState(type);

  function changeType(text: string) {
    if (text === "receita") {
      setCheckedType("receita");
      sendTypeChanged("receita");
    } else {
      setCheckedType("despesa");
      sendTypeChanged("despesa");
    }
  }

  return (
    <RegisterContainer>
      <RegisterTypeBtn
        checked={checkedType === "receita" ? true : false}
        onPress={() => changeType("receita")}
      >
        <Feather name="arrow-up" size={25} color="#121212" />
        <RegisterLabel>Receita</RegisterLabel>
      </RegisterTypeBtn>

      <RegisterTypeBtn
        checked={checkedType === "despesa" ? true : false}
        onPress={() => changeType("despesa")}
      >
        <Feather name="arrow-down" size={25} color="#121212" />
        <RegisterLabel>Despesa</RegisterLabel>
      </RegisterTypeBtn>
    </RegisterContainer>
  );
}
