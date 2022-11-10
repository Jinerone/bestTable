import { Space, Row } from "antd";
import AnswerBox from "../AnswerBox";

interface AnswerRowProps {
  ten: number;
}

export default function AnswerRow(values: AnswerRowProps): JSX.Element {
  let number: number = 0;
  return (
    <Row>
      <Space direction="horizontal">
        {[...Array(10)].map((index, key) => (
            <AnswerBox key={key} number={values.ten * 10 + ++number} />
        ))}
      </Space>
    </Row>
  );
}
