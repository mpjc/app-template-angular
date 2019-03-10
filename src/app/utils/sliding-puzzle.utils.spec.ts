import { createBoard, SlidingPuzzleTile, isCorrectOrder, tryMove } from './sliding-puzzle.utils';

describe('createBoard', () => {
  it('returns an empty array if size is 0', () => {
    const board = createBoard(0);
    expect(board).toEqual([]);
  });
  it('returns an empty array if size is 1', () => {
    const board = createBoard(1);
    expect(board).toEqual([]);
  });
  it('results a board of the expected size', () => {
    const board = createBoard(2);
    expect(board.length).toBe(2);
    expect(board[0].length).toBe(2);
    expect(board[1].length).toBe(2);
  });
  it('returns a board with the last tile to be empty', () => {
    const board = createBoard(2);
    const flattened = flattenBoard(board);
    const empty = flattened.find((t) => t.isEmpty);
    expect(empty).toBeTruthy();
    const emptyTile = empty as SlidingPuzzleTile;
    expect(emptyTile.x).toBe(1);
    expect(emptyTile.y).toBe(1);
  });
  it('returns a shuffled board', () => {
    const board = createBoard(2);
    const flattened = flattenBoard(board);
    let anyDifferent = false;
    for (let i = 0; i < flattened.length; i++) {
      const x = i % 2;
      const y = Math.floor(i / 2);
      const tile = flattened[i];
      if (tile.x !== x || tile.y !== y) {
        anyDifferent = true;
      }
    }
    expect(anyDifferent).toBeTruthy();
  });
});

describe('tryMove', () => {
  it('returns original board for invalid moves', () => {
    const board = [
      [createTile(0, 0), createTile(1, 0)],
      [createTile(1, 1), createEmptyTile(0, 1)],
    ];
    expect(tryMove(board, { x: 0, y: 0 })).toBe(board);
    expect(tryMove(board, { x: 1, y: 1 })).toBe(board);
  });
  it('returns new correct board for valid move', () => {
    const board = [
      [createTile(0, 0), createTile(1, 0)],
      [createTile(1, 1), createEmptyTile(0, 1)],
    ];
    const afterMove = tryMove(board, { x: 1, y: 0 });
    expect(afterMove[0][0]).toEqual(board[0][0]);
    expect(afterMove[0][1]).toEqual(board[1][1]);
    expect(afterMove[1][0]).toEqual(board[1][0]);
    expect(afterMove[1][1]).toEqual(board[0][1]);
  });
});

describe('isCorrectOrder', () => {
  it('returns false for an un-ordered board', () => {
    const board = [
      [createTile(0, 0), createTile(1, 0)],
      [createTile(1, 1), createEmptyTile(0, 1)],
    ];
    const result = isCorrectOrder(board);
    expect(result).toBe(false);
  });
  it('returns true for an ordered board', () => {
    const board = [
      [createTile(0, 0), createTile(1, 0)],
      [createTile(0, 1), createEmptyTile(1, 1)],
    ];
    const result = isCorrectOrder(board);
    expect(result).toBe(true);
  });
});

const flattenBoard = (board: SlidingPuzzleTile[][]): SlidingPuzzleTile[] => {
  return board.reduce((flat, row) => [...flat, ...row]);
};

const createTile = (x: number, y: number): SlidingPuzzleTile => {
  return { x, y, isEmpty: false };
};

const createEmptyTile = (x: number, y: number): SlidingPuzzleTile => {
  return { x, y, isEmpty: true };
};
