import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';

import { SettingsState } from './store/settings';
import { AppState } from './store';

@Component({
  selector: 'ata-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  theme: 'dark' | 'light' = 'dark';

  private readonly settings$: Observable<SettingsState>;
  private readonly subscription = new Subscription();

  constructor(store: Store<AppState>) {
    this.settings$ = store.select(s => s.settings);
  }

  ngOnInit() {
    this.subscription.add(
      this.settings$.subscribe(s => this.theme = s.theme)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
