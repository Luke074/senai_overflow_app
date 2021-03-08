import React from "react";
import { Container, Text } from "./styles";

function Button({ text, handlePress, ...rest }) {
  return (
    <Container onPress={handlePress}>
      <Text>{text}</Text>
    </Container>
  );
}

export default Button;
