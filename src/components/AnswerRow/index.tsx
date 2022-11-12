import { Space, Row } from "antd";
import AnswerBox from "../AnswerBox";

interface AnswerRowProps {
  ten: number;
  onAnswer: (number: number) => void;
}

export default function AnswerRow(props: AnswerRowProps): JSX.Element {
  let number: number = 0;
 
  function handleSelect(number: number) {
    props.onAnswer(number);
  }

  return (
    <Row>
      <Space direction="horizontal">
        {[...Array(10)].map((index, key) => (
            <AnswerBox key={key} number={props.ten * 10 + ++number} onSelect={handleSelect} />
        ))}
      </Space>
    </Row>
  );
}
