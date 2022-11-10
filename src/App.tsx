import React from "react";
import "./App.css";
import AnswerGrid from "./components/AnswerGrid";
import { Layout, Card } from "antd";
import { SetupUser } from "./components/setupUser";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Content>
          <Card>
            <AnswerGrid />
          </Card>
          <SetupUser />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default App;
