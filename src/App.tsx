import React from "react";
import "./App.css";
import AnswerGrid from "./components/AnswerGrid";
import { Layout, Card } from "antd";
import QuestionTag from "./components/QuestionTag";
import Game from "./components/Game/game";

const { Header, Footer, Content } = Layout;

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};


function App() {
  return (
    <>
      <Layout style={styles}>
        <Content>
            <Game />
        </Content>
      </Layout>
    </>
  );
}

export default App;
