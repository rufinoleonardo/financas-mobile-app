import { ViewProps } from "react-native";
import styled from "styled-components/native";

interface TagContainerProps extends ViewProps {
  type: string;
}

export const Container = styled.Pressable``;

export const HistoryItemContainer = styled.View`
  background-color: #f0f3ff;
  margin-bottom: 14px;
  margin-left: 8px;
  margin-right: 8px;
  padding: 12px;
  border-radius: 4px;
`;

export const TagContainer = styled.View<TagContainerProps>`
  flex-direction: row;
  background-color: ${(props) =>
    props.type === "despesa" ? "#FF9999" : "#99FF99"};
  align-items: center;
  justify-content: center;
  max-width: 120px;
  padding: 4px 8px;
  border-radius: 4px;
  margin-bottom: 8px;
`;

export const TagText = styled.Text`
  margin-left: 8px;
  font-size: 16px;
`;

export const HistoryItemValue = styled.Text`
  font-size: 22px;
`;
