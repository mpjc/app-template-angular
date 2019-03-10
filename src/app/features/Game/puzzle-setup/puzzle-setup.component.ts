import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Setup } from '@/store/game';
import { AppState } from '@/store';

@Component({
  selector: 'ata-puzzle-setup',
  templateUrl: './puzzle-setup.component.html',
  styleUrls: ['./puzzle-setup.component.scss']
})
export class PuzzleSetupComponent {

  constructor(private readonly store: Store<AppState>) {
  }

  setupGame(size: number) {
    this.store.dispatch(new Setup({ size }));
  }
}
