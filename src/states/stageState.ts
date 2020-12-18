import { Platforms } from '../objects/platforms';
import { StageTile } from '../objects/stageTile';
import { stageOneTileList } from '../stages/stage_1';

export class StageState {

    platforms: Platforms;
    tiles: Map<string, StageTile>;

    constructor() {
        this.platforms = new Platforms();

        this.tiles = new Map();
        for (let row = 0; row < stageOneTileList.length; row++) {
            for (let col = 0; col < stageOneTileList[row].length; col++) {
                this.tiles.set(`${row}${col}`, new StageTile(stageOneTileList.length - row, col, stageOneTileList[row][col]));
            }
        }
    }
}