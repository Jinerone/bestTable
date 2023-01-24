import { Space } from "antd";
import { useEffect, useState } from "react";
import MathQuestion from "../../business/domain/MathQuestion";
import MathRun from "../../business/domain/MathRun";
import AnswerGrid from "../AnswerGrid";
import BadPointsBar from "../BadPointsBar";
import QuestionTag from "../QuestionTag";
import Timer from "../Timer";

interface RunPanelProps {
  mathRun: MathRun;
  onNextRun: () => void;
}

export default function RunPanel(props: RunPanelProps) {
  let [wrongAnswersNumber, setWrongAnswersNumber] = useState<number>(0);
  let [refreshNumber, setRefreshNumber] = useState<number>(0);
  let [helpNumbers, setHelpNumbers] = useState<number[]>(props.mathRun.getHelpNumbers())

  function handleAnswer(answerNumber: number) {
    props.mathRun.addAnswer(answerNumber);
    setWrongAnswersNumber(props.mathRun.wrongAnswersNumber());
    if (props.mathRun.isComplete) {
        props.onNextRun();
        setRefreshNumber(refreshNumber + 1);
        setWrongAnswersNumber(0);
    }
  }  

  useEffect(() => {
    setHelpNumbers(props.mathRun.getHelpNumbers());
  }, [props.mathRun])
  

  return (
    <>
      <QuestionTag question={props.mathRun.question} />
      <Space direction="horizontal">
        <BadPointsBar badNumber={wrongAnswersNumber} />
        <Timer refreshNumber={refreshNumber} />
      </Space>
      <AnswerGrid helps={helpNumbers} onAnswer={handleAnswer} />
    </>
  );
}
