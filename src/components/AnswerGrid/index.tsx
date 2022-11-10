import { Row, Space } from "antd";
import AnswerRow from "../AnswerRow";

export default function AnswerGrid(): JSX.Element {
  let ten: number = 0;
  return (
    <Space direction="vertical">
      {[...Array(10)].map((index, key) => (
          <AnswerRow key={key} ten={ten++} />
      ))}
    </Space>
  );
}
