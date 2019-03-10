import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { GameState, MoveTile } from '@/store/game';
import { AppState } from '@/store';

@Component({
  selector: 'ata-puzzle-board',
  templateUrl: './puzzle-board.component.html',
  styleUrls: ['./puzzle-board.component.scss']
})
export class PuzzleBoardComponent {
  @Input() game: GameState;

  constructor(private readonly store: Store<AppState>) {
  }

  moveGameTile(x: number, y: number) {
    this.store.dispatch(new MoveTile({ x, y }));
  }

}
