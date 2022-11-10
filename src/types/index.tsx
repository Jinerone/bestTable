export default interface User {
    Name: string,
    Level: ('low' | 'medium' | 'hard'  )
}

export default interface MathResponse {
    time: number,
    badResponses: Array<number>,
    valid: boolean
}
