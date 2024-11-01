import styled from "styled-components/native";

export const Background = styled.View`
  background-color: #f0f4ff;
  flex: 1;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const Saudacao = styled.Text`
  font-size: 20px;
`;

export const UsersName = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const RegisterBtn = styled.TouchableOpacity`
  background-color: #3b3dbf;
  width: 90%;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 8px;
  margin-top: 20px;
`;

export const RegisterText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const LogoutBtn = styled.TouchableOpacity`
  width: 90%;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 8px;
  margin-top: 14px;
  border-width: 1px;
  border-color: #ff5555;
`;

export const LogoutText = styled.Text`
  color: #ff5555;
  font-weight: bold;
  font-size: 18px;
`;
