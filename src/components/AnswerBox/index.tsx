import { Button, Col } from "antd";
import { useStore } from "../../business";

interface AnswerBoxProps {
  number: number;
}

export default function AnswerBox(values: AnswerBoxProps): JSX.Element {
  const { isActive } = useStore((state) => ({
    isActive: state.possibleAnswerBoxes[values.number] !== undefined,
  }));
  return (
    <Col>
      <Button
        type={isActive ? "primary" : "default"}
        shape="circle"
        size="large"
        disabled={!isActive}
      >
        {values.number}
      </Button>
    </Col>
  );
}
