export default class MathAnswer {
  readonly answerTime: number;
  readonly answer: number;

  public constructor(answer: number, time: number) {
    this.answerTime = time;
    this.answer = answer;
  }
}