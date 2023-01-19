import { Card, Space } from "antd";
import AnswerRow from "../AnswerRow";
const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

interface AnswerGridProps {
  helps: number[];
  onAnswer: (number: number) => void;
}

export default function AnswerGrid(props: AnswerGridProps): JSX.Element {
  let ten: number = 0;
  function handleAnswer(number: number) {
    props.onAnswer(number);
  }

  return (
    <Card style={styles}>
      <Space direction="vertical">
        {[...Array(10)].map((index, key) => (
          <AnswerRow key={key} ten={ten++} helps={props.helps} onAnswer={handleAnswer}/>
        ))}
      </Space>
    </Card>
  );
}
