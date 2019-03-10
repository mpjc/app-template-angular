import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@/store';
import { Observable, Subscription } from 'rxjs';

import { SettingsState, SetTheme, initialState } from '@/store/settings';

@Component({
  selector: 'ata-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  get isDarkTheme(): boolean {
    return this.settings.theme === 'dark';
  }

  settings = initialState;
  private readonly settings$: Observable<SettingsState>;
  private readonly subscription = new Subscription();

  constructor(private readonly store: Store<AppState>) {
    this.settings$ = store.select(s => s.settings);
  }

  ngOnInit() {
    this.subscription.add(
      this.settings$.subscribe(s => this.settings = s)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleTheme() {
    const theme = this.isDarkTheme ? 'light' : 'dark';
    this.store.dispatch(new SetTheme({ theme }));
  }

}
