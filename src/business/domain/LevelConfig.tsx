import { HelpLevel, ShuffleType } from "./enum";

export default class LevelConfig {
    readonly shuffleType: ShuffleType;
    readonly helpLevel: HelpLevel;

    public constructor(shuffleType: ShuffleType, helpLevel: HelpLevel) {
        this.shuffleType = shuffleType;
        this.helpLevel = helpLevel;
    }
}