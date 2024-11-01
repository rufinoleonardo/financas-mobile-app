import { Background, Input, SubmitBtn, SubmitText } from "./styles";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, Keyboard, View } from "react-native";
import { useState } from "react";
import { RegisterTypes } from "../../components/RegisterTypes";
import { api } from "../../services/api";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";

export default function New() {
  const [labelInput, setLabelInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [type, setType] = useState<"despesa" | "receita" | null>("despesa");

  const navigation = useNavigation();

  function handleSubmit() {
    Keyboard.dismiss();

    if (isNaN(Number(valueInput)) || Number(valueInput) == 0 || type === null) {
      alert("Preencha todos os campos.");
      return;
    }

    Alert.alert(
      "Registrando",
      `Tipo: ${type} - ${labelInput} R$${valueInput}`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "registrar", onPress: () => handleAdd() },
      ]
    );
  }

  async function handleAdd() {
    Keyboard.dismiss();
    try {
      const response = await api.post("/receive", {
        description: labelInput,
        value: Number(valueInput),
        type: type,
        date: format(new Date(), "dd/MM/yyyy"),
      });

      setLabelInput("");
      setValueInput("");
      navigation.navigate("HomePage");
    } catch (err) {
      console.log("ERR", err);
    }
  }

  return (
    <Background onPress={() => Keyboard.dismiss()}>
      <SafeAreaView>
        <Header title="Registrando" />
        <View style={{ marginTop: 14, alignItems: "center" }}>
          <Input
            placeholder="Descrição"
            value={labelInput}
            onChangeText={(text) => setLabelInput(text)}
          />
          <Input
            placeholder="Valor"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={(text) => setValueInput(text)}
          />

          <RegisterTypes
            type={type}
            sendTypeChanged={(item) => setType(item)}
          />

          <SubmitBtn onPress={() => handleSubmit()}>
            <SubmitText>Registrar</SubmitText>
          </SubmitBtn>
        </View>
      </SafeAreaView>
    </Background>
  );
}
