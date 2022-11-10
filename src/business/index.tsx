import create from 'zustand';

export interface GameStore {
    possibleAnswerBoxes: number[],
    addPossibleAnswerBox: (index: number) => void 
}

export const useStore = create<GameStore>((set) => ({

}))