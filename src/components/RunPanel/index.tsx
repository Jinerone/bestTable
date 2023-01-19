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
  let [answerTime, setAnswerTime] = useState<number>(0);
  
  function handleAnswer(answerNumber: number) {
    props.mathRun.addAnswer(answerNumber, answerTime);
    setWrongAnswersNumber(props.mathRun.wrongAnswersNumber());
    if (props.mathRun.isComplete) {
        props.onNextRun();
        setAnswerTime(0);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => setAnswerTime(s => s +1), 1000);
    return () => clearInterval(timer);
  }, [answerTime]);

  return (
    <>
      <QuestionTag question={props.mathRun.question} />
      <Space direction="horizontal">
        <BadPointsBar badNumber={wrongAnswersNumber} />
        <Timer seconds={answerTime} />
      </Space>
      <AnswerGrid helps={props.mathRun.getHelpNumbers()} onAnswer={handleAnswer} />
    </>
  );
}
