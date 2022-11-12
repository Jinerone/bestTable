import { HelpLevel } from "./enum";
import MathAnswer from "./MathAnswer";
import MathQuestion from "./MathQuestion";

export default class MathRun {
    readonly question: MathQuestion;
    readonly answer: MathAnswer;
    readonly help: Array<number>;

    public constructor(question: MathQuestion, helpLevel: HelpLevel) {
        this.question = question;
        this.answer = new MathAnswer();
        this.help = this.getHelpNumbers(helpLevel);
    }

    public addAnswer(number: number, time: number) {
        if (this.question.getResult() === number)
            this.answer.goodAnswerTime = time;
            else this.answer.addBadAnswer(number, time);
    }

    public isValidate(): boolean {
        return this.answer.isValid();
    }
    
    public getHelpNumbers(helpLevel: HelpLevel): Array<number> {
        let helps = new Array<number>();
        if(helpLevel == HelpLevel.Hard) {
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
        if(helpLevel == HelpLevel.Medium) {
            for (let help = this.question.getResult(); help > 0; help-= 10) {
                helps.push(help);
                helps.push(help + 1);
                helps.push(help - 1);
            }
            for (let help = this.question.getResult(); help <= 100; help+= 10) {
                helps.push(help);
                helps.push(help + 1);
                helps.push(help - 1);
            }
            return helps;
        }
        if(helpLevel == HelpLevel.Easy) {
            for (let help = this.question.getResult(); help > 0; help-= 10) {
                helps.push(help);
            }
            for (let help = this.question.getResult(); help <= 100; help+= 10) {
                helps.push(help);
            }
            return helps;
        }
        if(helpLevel == HelpLevel.None) {
            for (let help = 1; help >= 100; help++) {
                helps.push(help);
            }
            return helps;
        }
        return helps;
    }
}

