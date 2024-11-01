import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const BlurArea = styled.Pressable`
  background-color: rgba(34, 34, 34, 0.4);
  flex: 1;
`;

export const CalendarArea = styled.View`
  background-color: "#FFF";
  flex: 2;
`;

export const BtnArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  background-color: #fff;
  padding-bottom: 50px;
`;

export const SubmitBtn = styled.TouchableOpacity`
  width: 90%;
  background-color: #3b3dbf;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const SubmitText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
`;
