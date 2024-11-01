import { useMemo } from "react";
import { Balance, Card, Label } from "./styles";

export default function BalanceItem({ data }) {
  const itemLabel = useMemo(() => {
    if (data.tag === "saldo") {
      return {
        label: "Saldo atual",
        color: "3b3dbf",
      };
    } else if (data.tag === "receita") {
      return {
        label: "Entradas de hoje",
        color: "00b94a",
      };
    } else {
      return {
        label: "Saidas de hoje",
        color: "ef463a",
      };
    }
  }, [data]);

  return (
    <Card bg={itemLabel.color}>
      <Label>{itemLabel.label}</Label>
      <Balance>R$ {data.saldo}</Balance>
    </Card>
  );
}
