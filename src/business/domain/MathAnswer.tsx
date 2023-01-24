export default class MathAnswer {
  readonly answerDate: Date;
  readonly answer: number;

  public constructor(answer: number, date: Date) {
    this.answerDate = date;
    this.answer = answer;
  }
}