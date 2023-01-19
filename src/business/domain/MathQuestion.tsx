export default class MathQuestion {
    private leftOperator: number;
    private rightOperator: number;
    readonly label: string;
    
    public constructor(leftOperator: number, rightOperator: number) {
        this.leftOperator = leftOperator;
        this.rightOperator = rightOperator;
        this.label = `${this.leftOperator} x ${this.rightOperator}`;
    }

    public getResult(): number {
        return this.leftOperator * this.rightOperator;
    }
}