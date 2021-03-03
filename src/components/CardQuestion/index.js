import React from "react";
import {
  Container,
  CardHeader,
  ImageProfile,
  HeaderContent,
  TextPoster,
  TextDate,
  CardBody,
  TextTitle,
  TextDescription,
  ImageQuestion,
  CardFooter,
  ContainerInputAnswer,
  InputAnswer,
  SendIcon,
  ContainerAnswer,
} from "./styles";
import fotoPerfil from "../../../assets/foto_perfil.png";
import colors from "../../styles/colors";

function CardAnswer() {
  return (
    <ContainerAnswer>
      <CardHeader>
        <ImageProfile source={fotoPerfil} />
        <HeaderContent>
          <TextPoster>por Fulano</TextPoster>
          <TextDate>em 10/10/2010 às 10:10</TextDate>
        </HeaderContent>
      </CardHeader>
      <CardBody>
        <TextDescription>Essa é a descrição da Resposta</TextDescription>
      </CardBody>
    </ContainerAnswer>
  );
}

function CardQuestion() {
  return (
    <Container>
      <CardHeader>
        <ImageProfile source={fotoPerfil} />
        <HeaderContent>
          <TextPoster>por Fulano</TextPoster>
          <TextDate>em 10/10/2010 às 10:10</TextDate>
        </HeaderContent>
      </CardHeader>
      <CardBody>
        <TextTitle>Titulo da Questão</TextTitle>
        <TextDescription>Descrição da Questao fica aqui</TextDescription>
        <ImageQuestion style={{ resizeMode: "contain" }} source={fotoPerfil} />
      </CardBody>
      <CardFooter>
        <TextPoster>Seja o Primeiro a Responder</TextPoster>
        <CardAnswer />
        <ContainerInputAnswer>
          <InputAnswer
            placeholder="Responda a essa pergunta"
            placeholderTextColor={colors.lightTransparent}
          />
          <SendIcon name="paper-plane" />
        </ContainerInputAnswer>
      </CardFooter>
      
    </Container>
  );
}

export default CardQuestion;
