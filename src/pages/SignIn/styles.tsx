import React from "react";
import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: #f0f4ff;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 300px;
  object-fit: contain;
  margin-bottom: 20px;
`;

export const TextInput = styled.TextInput`
  width: 90%;
  height: auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  color: #181818;
  margin-bottom: 10px;
`;

export const SubmitPressable = styled.TouchableOpacity`
  width: 90%;
  height: 44px;
  background-color: #3b3dbf;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const SubmitText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const Link = styled.TouchableOpacity`
  width: 90%;
  justify-content: center;
  padding: 8px 0;
`;

export const LinkText = styled.Text`
  color: #181818;
  text-align: center;
`;
