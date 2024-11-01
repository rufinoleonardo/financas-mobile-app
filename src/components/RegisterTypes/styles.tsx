import { TouchableOpacityProps } from "react-native-gesture-handler";
import styled from "styled-components/native";

interface RegisterTypeBtnProps extends TouchableOpacityProps {
  checked: boolean;
}

export const RegisterContainer = styled.View`
  flex-direction: row;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  justify-content: space-between;
  align-items: center;
`;

export const RegisterTypeBtn = styled.TouchableOpacity<RegisterTypeBtnProps>`
  background-color: ${(props) => (props.checked === true ? "#FFF" : "#e7e7e7")};
  width: 47%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 45px;
  border-radius: 4px;
  border-width: 1.5px;
  border-color: ${(props) =>
    props.checked === true ? "#3b3dbf" : "transparent"};
  margin-bottom: 14px;
`;

export const RegisterLabel = styled.Text`
  margin-left: 8px;
  font-size: 16px;
`;
