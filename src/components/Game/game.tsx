import { useState } from "react";
import { useStore } from "../../business";
import LevelConfig from "../../business/domain/LevelConfig";
import MathGame from "../../business/domain/MathGame";
import MathRun from "../../business/domain/MathRun";
import GameFactory from "../../business/factories/GameFactory";
import ModalSetupGame from "../ModalSetupGame";
import RunPanel from "../RunPanel";

export default function Game(): JSX.Element {
  const { setModalSetupUserVisible } =
    useStore((state) => ({
      setModalSetupUserVisible: state.setIsModalSetupVisible,
    }));
  let [game, setGame] = useState<MathGame>();
  let [currentRun, setCurrentRun] = useState<MathRun>();    

  function setSetupUser(levelConfig: LevelConfig, userName: string) {
    let nextGame = GameFactory.LoadSavedGame();
    !nextGame && (nextGame = GameFactory.InitializeNewGame(levelConfig));
    let currentRun = nextGame.GetCurrentRun();
    setGame(nextGame);
    setCurrentRun(currentRun);

    setModalSetupUserVisible(false);
  }

  function handleNextRun() {
    if (game) {
      game.NextRun();
      GameFactory.SaveGame(game);
      setCurrentRun(game.GetCurrentRun());
    }
  }

  return (
    <>
      <ModalSetupGame onValidate={setSetupUser} />
      {currentRun && (
        <RunPanel mathRun={currentRun} onNextRun={handleNextRun} />
      )}
    </>
  );
}
