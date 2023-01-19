import { Card, Tag } from "antd";
import { useStore } from "../../business";
import MathQuestion from "../../business/domain/MathQuestion";

interface QuestionTagProps {
  question: MathQuestion;
}
export default function QuestionTag(props: QuestionTagProps): JSX.Element {

  return (
    <Card>
      <Tag color="#2db7f5" style={{ fontSize:'100px', lineHeight: "100px" }}>
        { props.question.label }
      </Tag>
    </Card>
  );
}
