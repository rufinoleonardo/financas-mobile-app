import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin-top: 30px;
  margin-left: 16px;
  margin-bottom: 16px;

  width: 100%;
  max-height: 60px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #121212;
`;

export const MenuBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding-right: 8px;
`;
