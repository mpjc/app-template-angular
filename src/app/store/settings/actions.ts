import { Action } from '@ngrx/store';

export enum SettingsActions {
  SetTheme = '[Settings] SetTheme',
}

export class SetTheme implements Action {
  readonly type = SettingsActions.SetTheme;
  constructor(public payload: { theme: 'dark' | 'light' }) { }
}
