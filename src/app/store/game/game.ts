import { SlidingPuzzleTile } from '@/utils';

export enum GamePhase {
  Setup = 'Setup',
  Playing = 'Playing',
  Won = 'Won',
}

// tslint:disable-next-line:no-empty-interface
export interface GameTile extends SlidingPuzzleTile {
}

export interface GameState {
  board: SlidingPuzzleTile[][];
  boardSize: number;
  phase: GamePhase;
}
