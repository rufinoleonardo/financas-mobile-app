import { ViewProps } from "react-native";
import styled from "styled-components/native";

interface ContainerProps extends ViewProps {
  bg: string;
}

export const Card = styled.View<ContainerProps>`
  background-color: #${(props) => props.bg};
  margin: 0 14px;
  border-radius: 4px;
  width: 300px;
  justify-content: center;
  align-items: flex-start;
  padding-left: 14px;
`;

export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const Balance = styled.Text`
  font-size: 34px;
  letter-spacing: 1px;
  color: #fff;
`;
