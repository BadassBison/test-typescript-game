import { NinjaAnimations } from '../animations/ninjaAnimations';
import { AnimationTypes } from '../constants/animationTypes';
import { PositionData } from '../interfaces/positionData';

export class PlayerState {
    animations: NinjaAnimations;
    attacking: boolean;
    attackUsed: boolean;
    currentFrame: number;
    currentImage: HTMLImageElement;
    currentState: string;
    falling: boolean;
    frameCount: number;
    frameDelay: number;
    framesPerAnimation: number;
    playerId: string;
    currentRegion: string;
    positionData: PositionData;
    movingRight: boolean;
    SPRITE_SIZER: number;

    constructor(playerId: string) {
        this.animations = new NinjaAnimations();
        this.attacking = false;
        this.attackUsed = false;
        this.currentFrame = 0;
        this.currentState = AnimationTypes.IDLE_RIGHT;
        this.falling = false;
        this.frameCount = 0;
        this.frameDelay = 4;
        this.framesPerAnimation = 10;
        this.playerId = playerId;
        this.movingRight = true;
        this.SPRITE_SIZER = 0;
    }
}
