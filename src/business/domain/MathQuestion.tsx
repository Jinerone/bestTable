export default class MathQuestion {
    readonly leftOperator: number;
    readonly rightOperator: number;
    
    public constructor(leftOperator: number, rightOperator: number) {
        this.leftOperator = leftOperator;
        this.rightOperator = rightOperator;
    }

    public getResult(): number {
        return this.leftOperator * this.rightOperator;
    }
}