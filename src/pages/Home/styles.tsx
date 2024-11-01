import styled from "styled-components/native";

export const Background = styled.View`
  background-color: #f0f4ff;
  flex: 1;
`;

export const BalanceList = styled.FlatList`
  min-height: 150px;
  max-height: 180px;
`;

export const HeaderMovements = styled.View`
  flex-direction: row;
  padding: 14px;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  background-color: #fff;
  margin-top: 14px;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  margin-left: 8px;
  font-weight: 500;
`;

export const HistoryList = styled.FlatList`
  background-color: #fff;
`;
