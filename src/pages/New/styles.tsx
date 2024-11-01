import styled from "styled-components/native";

export const Background = styled.Pressable`
  flex: 1;
  background-color: #f0f4ff;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 14px;
  padding: 0 8px;
  font-size: 16px;
`;

export const SubmitBtn = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: #00b94a;
  border-radius: 4px;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
