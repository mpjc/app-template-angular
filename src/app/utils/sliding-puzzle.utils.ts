import { randomInt } from './random.utils';

interface Point2d {
  x: number;
  y: number;
}

export interface SlidingPuzzleTile extends Point2d {
  isEmpty: boolean;
}

export function createBoard(size: number): SlidingPuzzleTile[][] {
  if (size < 2) {
    return [];
  }

  const board: SlidingPuzzleTile[][] = [];
  for (let y = 0; y < size; y++) {
    const row: SlidingPuzzleTile[] = [];
    for (let x = 0; x < size; x++) {
      row.push({ x, y, isEmpty: false });
    }
    board.push(row);
  }

  const lastTile = board[size - 1][size - 1];
  lastTile.isEmpty = true;

  let shuffled = shuffleBoard(board);
  while (isCorrectOrder(shuffled)) {
    shuffled = shuffleBoard(board);
  }
  return shuffled;
}

export function tryMove(board: SlidingPuzzleTile[][], p: Point2d): SlidingPuzzleTile[][] {
  const moves = getAdjacent(p);

  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < moves.length; i++) {
    const m = moves[i];
    if (isValidMove(board, p, m)) {
      return swapTiles(board, p, m);
    }
  }

  return board;
}

export function isCorrectOrder(board: SlidingPuzzleTile[][]) {
  const size = board.length;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (x === y && x === (size - 1)) {
        continue;
      }

      const tile = board[y][x];
      if (tile.x !== x || tile.y !== y) {
        return false;
      }
    }
  }
  return true;
}

function swapTiles(board: SlidingPuzzleTile[][], p1: Point2d, p2: Point2d): SlidingPuzzleTile[][] {
  const t1 = board[p1.y][p1.x];
  const t2 = board[p2.y][p2.x];

  return board
    .map((r, y) => r
      .map((c, x) => {
        const p = { x, y };
        if (arePointsEqual(p, p1)) {
          return t2;
        }
        if (arePointsEqual(p, p2)) {
          return t1;
        }
        return c;
      }));
}

function getAdjacent(p: Point2d): Point2d[] {
  const { x, y } = p;
  return [
    { x, y: y - 1 },
    { x, y: y + 1 },
    { x: x - 1, y },
    { x: x + 1, y },
  ];
}

function isValidMove(board: SlidingPuzzleTile[][], from: Point2d, to: Point2d): boolean {
  const row = board[to.y];
  if (!row) {
    return false;
  }

  const tile = row[to.x];
  if (!tile || !tile.isEmpty) {
    return false;
  }

  return isPointOnBoard(board, from) &&
    isPointOnBoard(board, to) &&
    getPointDistance(from, to) === 1;
}

function shuffleBoard(board: SlidingPuzzleTile[][]): SlidingPuzzleTile[][] {
  let emptyAt = findEmptyTile(board);
  if (emptyAt.x === -1 || emptyAt.y === -1) {
    return board;
  }

  const size = board.length;
  const iterations = getShuffleIterations(size);
  let shuffled = board;
  for (let i = 0; i < iterations; i++) {
    const validMoves = getAdjacent(emptyAt).filter((m) => isValidMove(shuffled, m, emptyAt));
    const move = validMoves[randomInt(validMoves.length)];
    shuffled = tryMove(shuffled, move);
    emptyAt = move;
  }

  return shuffled;
}

function findEmptyTile(board: SlidingPuzzleTile[][]): Point2d {
  const size = board.length;
  for (let y = 0; y < size; y++) {
    const row = board[y];
    for (let x = 0; x < size; x++) {
      if (row[x].isEmpty) {
        return { x, y };
      }
    }
  }
  return { x: -1, y: -1 };
}

function getShuffleIterations(boardSize: number): number {
  const iterationsBase = 100;
  const iterationsMultipler = Math.pow(2, boardSize);
  return iterationsBase * iterationsMultipler;
}

function isPointOnBoard(board: SlidingPuzzleTile[][], p: Point2d): boolean {
  const size = board.length;
  return p.x >= 0 && p.y >= 0 && p.x < size && p.y < size;
}

function arePointsEqual(p1: Point2d, p2: Point2d): boolean {
  return p1.x === p2.x && p1.y === p2.y;
}

function getPointDistance(p1: Point2d, p2: Point2d): number {
  return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
}
