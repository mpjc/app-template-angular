import { Action } from '@ngrx/store';

export enum GameActions {
  MoveTile = '[Game] MoveTile',
  Quit = '[Game] Quit',
  Reset = '[Game] Reset',
  Setup = '[Game] Setup',
  Shuffle = '[Game] Shuffle'
}

export class MoveTile implements Action {
  readonly type = GameActions.MoveTile;
  constructor(public payload: { x: number, y: number }) { }
}

export class Quit implements Action {
  readonly type = GameActions.Quit;
  constructor() { }
}

export class Reset implements Action {
  readonly type = GameActions.Reset;
  constructor() { }
}

export class Setup implements Action {
  readonly type = GameActions.Setup;
  constructor(public payload: { size: number }) { }
}

export class Shuffle implements Action {
  readonly type = GameActions.Shuffle;
  constructor() { }
}
