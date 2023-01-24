import { ShuffleType } from "./enum";
import LevelConfig from "./LevelConfig";
import MathAnswer from "./MathAnswer";
import MathQuestion from "./MathQuestion";
import MathRun from "./MathRun";

export default class MathGame {
  private runNumber: number = 0;
  private runs: MathRun[];
  private levelConfig: LevelConfig;

  public constructor(
    runNumber: number,
    runs: MathRun[],
    levelConfig: LevelConfig
  ) {
    this.levelConfig = levelConfig;
    this.runs = runs;
    this.runNumber = runNumber;
  }

  public GetCurrentRun(): MathRun {
    return this.runs[this.runNumber];
  }

  public NextRun() {
    this.runNumber++;
  }

  public InitializeMathRuns(): MathGame {
    let orderedQuestions = this.GetAllOrderedQuestions();
    switch (this.levelConfig.shuffleType) {
      case ShuffleType.All:
        this.runs = this.shuffleArray(orderedQuestions).map(
          (value) => new MathRun(value, new Array<MathAnswer>(), this.levelConfig.helpLevel, undefined)
        );
        break;
      case ShuffleType.ByTripleTable:
      default:
        let shuffledByTripleTen = new Array<MathQuestion>();
        for (let ten = 0; ten <= 90; ten += 30) {
          shuffledByTripleTen = shuffledByTripleTen.concat(
            this.shuffleArray(orderedQuestions.slice(ten, ten + 30))
          ).concat(
            this.shuffleArray(orderedQuestions.slice(91, 100))
          );
        }
        this.runs = shuffledByTripleTen.map(
          (value) => new MathRun(value, new Array<MathAnswer>(), this.levelConfig.helpLevel, undefined)
        );
        break;
    }
    return this;
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
