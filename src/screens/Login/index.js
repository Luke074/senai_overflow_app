import React from "react";
import { Content, TextInputLogin, Label } from "./styles";
import { Container, ToolBar, TextToolBar } from "../../styles/stylesGlobal";
import { StatusBar, TouchableOpacity } from "react-native";
import colors from "../../styles/colors";
import Button from "../../components/Button";

function Login() {
  StatusBar.setBackgroundColor(colors.primary);

  return (
    <Container>
      <ToolBar>
        <TextToolBar>Faça o Login</TextToolBar>
      </ToolBar>
      <Content>
        <Label>E-mail</Label>
        <TextInputLogin
          placeholderTextColor={colors.lightTransparent}
          autoCompleteType="email"
          placeholder="Digite o seu e-mail"
        />
        <Label>Senha</Label>
        <TextInputLogin
          placeholderTextColor={colors.lightTransparent}
          autoCompleteType="password"
          placeholder="Digite sua senha"
        />
        <Button text="Entrar" />
      </Content>
    </Container>
  );
}

export default Login;
