import {
  Background,
  BalanceList,
  HeaderMovements,
  HeaderTitle,
  HistoryList,
} from "./styles";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";

import Icon from "@expo/vector-icons/MaterialIcons";
import { HistoryItem } from "../../components/HistoryItem";
import { Modal, TouchableOpacity } from "react-native";
import { CalendarModal } from "../../components/CalendarModal";

interface balanceProps {
  saldo: number;
  tag: "saldo" | "receita" | "despesa";
}

export interface MovementProps {
  created_at: Date;
  date: string;
  description: string;
  id: string;
  type: "receita" | "despesa";
  updated_at: Date;
  user_id: string;
  value: number;
}

export default function Home() {
  const [balanceList, setBalanceList] = useState<balanceProps[]>([]);
  const [movementDate, setMovementDate] = useState(new Date());
  const [movements, setMovements] = useState<MovementProps[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadBalance() {
      let isActive = true;

      let date = new Date(movementDate);
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;

      let formatedDate = format(onlyDate, "dd/MM/yyyy");

      const receives = await api.get(`/receives?date=${formatedDate}`);
      setMovements(receives.data);

      const balance = await api.get(`/balance`, {
        params: {
          date: formatedDate,
        },
      });

      if (isActive) setBalanceList(balance.data);

      return () => (isActive = false);
    }
    loadBalance();
  }, [isFocused, movementDate]);

  async function deleteItem(id: string) {
    try {
      await api.delete(`/receives/delete?item_id=${id}`);
      alert("Item deletado");

      setMovementDate(new Date());
    } catch (err) {
      console.log(err);
    }
  }

  function filterDateMovements(selectedDate) {
    setMovementDate(selectedDate);
  }

  return (
    <Background>
      <SafeAreaView>
        <Header title="Minhas movimentações" />
        <BalanceList
          data={balanceList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: balanceProps) => item.tag}
          renderItem={({ item }) => <BalanceItem data={item} />}
        />

        <HeaderMovements>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Icon name="event" size={28} />
          </TouchableOpacity>
          <HeaderTitle>Últimas movimentações</HeaderTitle>
        </HeaderMovements>
        <HistoryList
          data={movements}
          keyExtractor={(item: MovementProps) => item.id}
          renderItem={({ item }) => (
            <HistoryItem movement={item} deletingItem={deleteItem} />
          )}
          contentContainerStyle={{ height: "100%" }}
          showsVerticalScrollIndicator={false}
        />

        <Modal visible={modalVisible} transparent={true}>
          <CalendarModal
            closeModal={() => setModalVisible(false)}
            handleFilter={filterDateMovements}
          />
        </Modal>
      </SafeAreaView>
    </Background>
  );
}
