import create from "zustand";

export interface RunStore {
  isModalSetupVisible: boolean;
  setIsModalSetupVisible: (visible: boolean) => void;

  possibleAnswerBoxes: number[];
  setPossibleAnswerBoxes: (answerBoxes: number[]) => void;

  question: string | undefined;
  setQuestion: (question: string) => void;
}

export const useStore = create<RunStore>((set) => ({
  isModalSetupVisible: true,
  setIsModalSetupVisible: (visible: boolean) => 
    set(() => ({
        isModalSetupVisible: visible 
    })),

  possibleAnswerBoxes: new Array<number>(),
  setPossibleAnswerBoxes: (answerBoxes: number[]) => 
    set(() => ({
        possibleAnswerBoxes: answerBoxes
    })),

  question: undefined,
  setQuestion: (question: string) => 
    set (() => ({
        question: question
    }))
}));
