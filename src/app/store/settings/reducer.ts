import { Action } from '@ngrx/store';
import { SettingsActions, SetTheme } from './actions';
import { SettingsState } from './settings';

export const initialState: SettingsState = {
  theme: 'dark'
};

export function settingsReducer(state = initialState, action: Action): SettingsState {
  switch (action.type) {
    case SettingsActions.SetTheme: {
      const { theme } = (action as SetTheme).payload;
      return { theme };
    }
    default:
      return state;
  }
}
