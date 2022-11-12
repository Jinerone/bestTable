export default class MathAnswer {
    readonly badAnswerNumbers: number[];
    readonly badAnswerTimes: number[];
    private _goodAnswerTime?: number;

    public constructor() {
        this.badAnswerNumbers = new Array<number>();
        this.badAnswerTimes = new Array<number>();
    }

    public addBadAnswer(answerNumber: number, answerTime: number) {
        this.badAnswerNumbers.push(answerNumber);
        this.badAnswerTimes.push(answerTime);
    }

    public isValid(): boolean {
        return this._goodAnswerTime !== undefined;
    }

    public set goodAnswerTime(value: number) {
        this._goodAnswerTime = value;
    }
}