import { Alert } from "react-native";
import {
  Container,
  HistoryItemContainer,
  HistoryItemValue,
  TagContainer,
  TagText,
} from "./styles";

import Icon from "@expo/vector-icons/Feather";

export function HistoryItem({ movement, deletingItem }) {
  function handleDelete() {
    Alert.alert("Atenção", "Você está prestes a deletar um registro", [
      { text: "cancelar", style: "cancel" },
      { text: "confirmar", onPress: () => deletingItem(movement.id) },
    ]);
  }

  return (
    <Container onLongPress={() => handleDelete()}>
      <HistoryItemContainer>
        <TagContainer type={movement.type}>
          <Icon
            name={movement.type === "despesa" ? "arrow-down" : "arrow-up"}
            size={22}
          />
          <TagText>{movement.type}</TagText>
        </TagContainer>
        <HistoryItemValue>R$ {movement.value}</HistoryItemValue>
      </HistoryItemContainer>
    </Container>
  );
}
