import { Button, Col } from "antd";
import { useStore } from "../../business";

interface AnswerBoxProps {
  number: number;
  onSelect: (number: number) => void;
}

export default function AnswerBox(props: AnswerBoxProps): JSX.Element {
  const { isActive } = useStore((state) => ({
    isActive: state.possibleAnswerBoxes.filter((value) => value === props.number).length > 0,
  }));

  function handleClick() {
    props.onSelect(props.number);
  }

  return (
    <Col>
      <Button
        type={isActive ? "primary" : "default"}
        shape="circle"
        size="large"
        disabled={!isActive}
        onClick={handleClick}
      >
        {props.number}
      </Button>
    </Col>
  );
}
