import { ShuffleType } from "./enum";
import LevelConfig from "./LevelConfig";
import MathQuestion from "./MathQuestion";
import MathRun from "./MathRun";

export default class MathGame {
  private runNumber: number = 0;
  private runs: MathRun[];
  private levelConfig: LevelConfig;

  public constructor(levelConfig: LevelConfig) {
    this.levelConfig = levelConfig;
    this.runs = this.CreateMathRuns();
  }

  public GetCurrentRun(): MathRun {
    return this.runs[this.runNumber];
  }

  public SetNextRun() {
    this.runNumber++;
  }

  private CreateMathRuns(): MathRun[] {
    let orderedQuestions = this.GetAllOrderedQuestions();
    if (this.levelConfig.shuffleType === ShuffleType.All) {
      return this.shuffleArray(orderedQuestions).map(
        (value) => new MathRun(value, this.levelConfig.helpLevel)
      );
    }
    if (this.levelConfig.shuffleType === ShuffleType.ByTable) {
      let shuffledByTen = new Array<MathQuestion>();
      for (let ten = 0; ten <= 100; ten += 10) {
        shuffledByTen = shuffledByTen.concat(
          this.shuffleArray(orderedQuestions.slice(ten, ten + 10))
        );
      }
      return shuffledByTen.map(
        (value) => new MathRun(value, this.levelConfig.helpLevel)
      );
    }
    return orderedQuestions.map(
      (value) => new MathRun(value, this.levelConfig.helpLevel)
    );
  }

  private GetAllOrderedQuestions(): MathQuestion[] {
    let questions = new Array<MathQuestion>();
    for (let leftOperator = 1; leftOperator <= 10; leftOperator++) {
      for (let rightOperator = 1; rightOperator <= 10; rightOperator++) {
        questions.push(new MathQuestion(leftOperator, rightOperator));
      }
    }
    return questions;
  }

  private shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
