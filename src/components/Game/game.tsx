import { useState } from "react";
import { useStore } from "../../business";
import LevelConfig from "../../business/domain/LevelConfig";
import MathGame from "../../business/domain/MathGame";
import AnswerGrid from "../AnswerGrid";
import ModalSetupGame from "../ModalSetupGame";
import QuestionTag from "../QuestionTag";

export default function Game(): JSX.Element {
  const { setQuestion, setPossibleAnswerBoxes, setModalSetupUserVisible } =
    useStore((state) => ({
      setQuestion: state.setQuestion,
      setPossibleAnswerBoxes: state.setPossibleAnswerBoxes,
      setModalSetupUserVisible: state.setIsModalSetupVisible,
    }));
  let [game, setGame] = useState<MathGame>();

  function setSetupUser(levelConfig: LevelConfig, userName: string) {
    let newGame = new MathGame(levelConfig); 
    let currentRun = newGame.GetCurrentRun();
    setQuestion(
      `${currentRun.question.leftOperator} x ${currentRun.question.rightOperator}`
    );
    setPossibleAnswerBoxes(currentRun.help);
    setGame(newGame);
    setModalSetupUserVisible(false);
  }

  function setNextRun() {
    if(game) {
      game.SetNextRun();
      let run = game.GetCurrentRun();
      if (run) {
        setQuestion(
          `${run.question.leftOperator} x ${run.question.rightOperator}`
          );
          setPossibleAnswerBoxes(run.help);
        }
        setGame(game);
      }
  }

  function handleAnswer(number: number) {
    if (game) {
      let run = game.GetCurrentRun();
      if (run) {
        run.addAnswer(number, 0);
        setNextRun();
      }
    }
  }

  return (
    <>
      <ModalSetupGame onValidate={setSetupUser} />
      <QuestionTag />
      <AnswerGrid onAnswer={handleAnswer} />
    </>
  );
}
