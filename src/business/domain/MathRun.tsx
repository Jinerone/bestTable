import { HelpLevel } from "./enum";
import MathAnswer from "./MathAnswer";
import MathQuestion from "./MathQuestion";

export default class MathRun {
  readonly question: MathQuestion;
  readonly wrongAnswers: MathAnswer[];
  readonly helpLevel: HelpLevel;
  public _completeDate: Date | undefined;
  public get isComplete(): boolean {
    return this._completeDate !== undefined;
  }

  public constructor(
    question: MathQuestion,
    wrongAnswers: MathAnswer[],
    helpLevel: HelpLevel,
    completeTime: Date | undefined
  ) {
    this.question = question;
    this.wrongAnswers = wrongAnswers;
    this.helpLevel = helpLevel;
    this._completeDate = completeTime;
  }

  public addAnswer(answer: number) {
    if (this.question.getResult() === answer) this._completeDate = new Date();
    else this.wrongAnswers.push(new MathAnswer(answer, new Date()));
  }

  public wrongAnswersNumber() {
    return this.wrongAnswers.length;
  }

  public getHelpNumbers(): Array<number> {
    switch (this.helpLevel) {
      case HelpLevel.Hard:
        return this.getHardHelpNumbers();
      case HelpLevel.Medium:
        return this.getMediumHelpNumbers();
      case HelpLevel.Easy:
        return this.getEasyHelpNumbers();
      default:
        return this.getNoneHelpNumbers();
        break;
    }
  }

  private getHardHelpNumbers() {
    let helps = new Array<number>();
    for (let help = this.question.getResult(); help > 0; help -= 11) {
      helps.push(help);
      helps.push(help + 1);
      helps.push(help - 1);
      helps.push(help + 2);
      helps.push(help - 2);
    }
    for (let help = this.question.getResult(); help <= 100; help += 11) {
      helps.push(help);
      helps.push(help + 1);
      helps.push(help - 1);
      helps.push(help + 2);
      helps.push(help - 2);
    }
    return helps;
  }

  private getMediumHelpNumbers() {
    let helps = new Array<number>();
    for (let help = this.question.getResult(); help > 0; help -= 10) {
      helps.push(help);
      helps.push(help + 1);
      helps.push(help - 1);
    }
    for (let help = this.question.getResult(); help <= 100; help += 10) {
      helps.push(help);
      helps.push(help + 1);
      helps.push(help - 1);
    }
    return helps;
  }

  private getEasyHelpNumbers() {
    let helps = new Array<number>();
    let j = Math.floor(Math.random() * 4) + 6;
    for (let help = this.question.getResult(); help > 0; help -= j) {
      j = Math.floor(Math.random() * 4) + 6;
      helps.push(help);
    }
    for (let help = this.question.getResult(); help <= 100; help += j) {
      helps.push(help);
      j = Math.floor(Math.random() * 4) + 6;
      helps.push(help);
    }
    return helps;
  }

  private getNoneHelpNumbers() {
    let helps = new Array<number>();
    for (let help = 1; help <= 100; help++) {
      helps.push(help);
    }
    return helps;
  }
}
