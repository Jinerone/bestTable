import { Card, Tag } from "antd";
import { useStore } from "../../business";


export default function QuestionTag(): JSX.Element {
  const { question } = useStore((state) => ({
    question: state.question
  }));

  return (
    <Card>
      <Tag color="#2db7f5" style={{ fontSize:'100px', lineHeight: "100px" }}>
        { question }
      </Tag>
    </Card>
  );
}
