import LevelConfig from "../domain/LevelConfig";
import MathAnswer from "../domain/MathAnswer";
import MathGame from "../domain/MathGame";
import MathQuestion from "../domain/MathQuestion";
import MathRun from "../domain/MathRun";

export default class GameFactory {
  private static localStorageKey = "ludoTable";

  public static InitializeNewGame(levelConfig: LevelConfig): MathGame {
    return new MathGame(
      0,
      new Array<MathRun>(),
      levelConfig
    ).InitializeMathRuns();
  }

  public static LoadSavedGame(): MathGame | undefined {
    try {
      let item = localStorage.getItem(GameFactory.localStorageKey);
      if (item) {
        let savedGame = JSON.parse(item);
        return new MathGame(
          savedGame.runNumber,
          GameFactory.LoadSavedRuns(savedGame.runs),
          savedGame.levelConfig
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  public static SaveGame(game: MathGame) {
    localStorage.setItem(GameFactory.localStorageKey, JSON.stringify(game));
  }

  private static LoadSavedRuns(savedRuns: any): Array<MathRun> {
    try {
      const result = new Array<MathRun>();
      savedRuns.forEach((run: any) => {
        result.push(new MathRun(
          GameFactory.LoadSavedQuestion(run.question), 
          GameFactory.LoadSavedAnswers(run.wrongAnswers), 
          run.helpLevel, 
          run._completeTime))
      });
        return result;
    } catch (error) {
        throw new Error("GameFactory.LoadSavedRun");
    }
  }

  private static LoadSavedAnswers(savedAnswers: any) : Array<MathAnswer> {
    try {
      const result = new Array<MathAnswer>();
      savedAnswers.forEach((answer: MathAnswer) => {
        result.push(new MathAnswer(answer.answer, answer.answerDate))
      });
      return result;
    } catch (error) {
      throw new Error("GameFactory.LoadSavedAnswers");
    }
  }
  private static LoadSavedQuestion(savedQuestion: any) : MathQuestion {
    try {
        return new MathQuestion(savedQuestion.leftOperator, savedQuestion.rightOperator);
    } catch (error) {
      throw new Error("GameFactory.LoadSavedQuestion");
    }
  }
}
