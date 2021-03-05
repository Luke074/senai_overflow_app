import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, FlatList } from "react-native";
import { Container, ToolBar, TextToolBar } from "./styles";
import colors from "../../styles/colors";
import CardQuestion from "../../components/CardQuestion";
import { api } from "../../services/api";

function Home() {
  StatusBar.setBackgroundColor(colors.primary);

  const [question, setQuestion] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState([]);
  const [reload, setReload] = useState(null);
  const [isLoadingFeed, setIsLoadingFeed] = useState(false);
  const [page, setPage] = useState(1);

  const loadQuestions = async (reload) => {
    //se já tiver buscando, não busca de novo
    if (isLoadingFeed) return;

    //se tiver chego no fim, não busca de novo
    if (totalQuestions > 0 && totalQuestions == questions.length) return;

    setIsLoadingFeed(true);

    const response = await api.get("/feed", {
      params: { page },
    });

    setPage(page + 1);

    setQuestion([...question, ...response.data]);

    setTotalQuestions(response.headers["x-total-count"]);

    console.log(totalQuestions);

    setIsLoadingFeed(false);
  };

  useEffect(() => {
    loadQuestions();
  }, [reload]);

  return (
    <Container>
      <ToolBar>
        <TextToolBar>SENAI OVERFLOW</TextToolBar>
      </ToolBar>
      <FlatList
        data={question}
        style={{ width: "100%" }}
        onEndReached={() => loadQuestions()}
        keyExtractor={(question) => String(question.id)}
        renderItem={({ item: question }) => (
          <CardQuestion question={question} />
        )}
      />
    </Container>
  );
}

export default Home;
