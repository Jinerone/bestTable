import create from 'zustand';
import MathResponse from '../types';

export interface GameStore {
    possibleAnswerBoxes: number[],
    addPossibleAnswerBox: (index: number) => void, 

    questions: Array<Array<number>>,
    setQuestions: (questions: Array<Array<number>>) => void,

    responses: Array<Array<MathResponse>>,
    setResponses: (responses: Array<Array<MathResponse>>) => void,

    questionLevel: ('low' | 'medium' | 'hard'),
    setQuestionLevel: (level: ('low' | 'medium' | 'hard')) => void
}

export const useStore = create<GameStore>((set) => ({
    possibleAnswerBoxes: new Array<number>(),
    addPossibleAnswerBox: (index: number) => set((state) => ({
        possibleAnswerBoxes: [...state.possibleAnswerBoxes, index]
    })),

    questions: new Array<Array<number>>(),
    setQuestions: (questions: Array<Array<number>>) => set(() => ({
        questions: questions
    })),

    responses: new Array<Array<MathResponse>>(),
    setResponses: (responses: Array<Array<MathResponse>>) => set(() => ({
        responses: responses})),

    questionLevel: 'low',
    setQuestionLevel: (level: ('low' | 'medium' | 'hard')) => set(() => ({questionLevel: level}))
}))