import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { GameState, initialState, Quit, Shuffle } from '@/store/game';
import { AppState } from '@/store';

@Component({
  selector: 'ata-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  game: GameState;

  private readonly game$: Observable<GameState>;
  private readonly subscription = new Subscription();

  constructor(private readonly store: Store<AppState>) {
    this.processState(initialState);
    this.game$ = store.select(s => s.game);
  }

  ngOnInit() {
    this.subscription.add(
      this.game$.subscribe(l => this.processState(l))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  quitGame() {
    this.store.dispatch(new Quit());
  }

  shuffleBoard() {
    this.store.dispatch(new Shuffle());
  }

  private processState(gameState: GameState) {
    this.game = gameState;
  }

}
