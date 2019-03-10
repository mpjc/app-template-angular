import { Action } from '@ngrx/store';
import { GameActions, Setup, MoveTile } from './actions';
import { GameState, GamePhase } from './game';
import { createBoard, tryMove, isCorrectOrder } from '@/utils';

export const initialState: GameState = {
  boardSize: 0,
  board: createBoard(0),
  phase: GamePhase.Setup,
};

export function gameReducer(state = initialState, action: Action): GameState {
  switch (action.type) {
    case GameActions.MoveTile: {
      if (state.phase === GamePhase.Playing) {
        const { x, y } = (action as MoveTile).payload;
        const board = tryMove(state.board, { x, y });
        const phase = isCorrectOrder(board) ? GamePhase.Won : state.phase;
        return { ...state, board, phase };
      }
      return state;
    }
    case GameActions.Quit: {
      const boardSize = 0;
      const board = createBoard(0);
      const phase = GamePhase.Setup;
      return { boardSize, board, phase };
    }
    case GameActions.Setup: {
      const { size } = (action as Setup).payload;
      const boardSize = size;
      const board = createBoard(size);
      const phase = GamePhase.Playing;
      return { boardSize, board, phase };
    }
    case GameActions.Reset: {
      const board = createBoard(state.boardSize);
      const phase = GamePhase.Playing;
      return { ...state, board, phase };
    }
    case GameActions.Shuffle: {
      const board = createBoard(state.boardSize);
      return { ...state, board };
    }
    default:
      return state;
  }
}
