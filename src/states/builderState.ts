import { BuilderModeEngine } from '../engines/builderModeEngine';
import { Point } from '../interfaces/point';

export class BuilderState {

    builderMode: boolean;
    builderEngine: BuilderModeEngine;
    builderMenu: HTMLElement;
    saveBtn: HTMLElement;
    builderMenuOpen: boolean;
    tileSelector?: HTMLElement;
    tileSelectorCheckbox: HTMLInputElement;
    tileSelectorOpen: boolean;
    selectedTile: HTMLElement;

    removingTiles: boolean;
    removingTilesCheckbox: HTMLInputElement;

    handleMouseClick: boolean;
    clickedPosition: Point;
    clickedGridCoords: Point;

    constructor() {
        this.builderMode = false;
        this.builderEngine = new BuilderModeEngine();
        this.builderMenuOpen = false;
        this.tileSelectorOpen = false;
        this.handleMouseClick = false;
        this.removingTiles = false;
    }

}
