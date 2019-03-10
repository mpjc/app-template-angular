import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { GameState, gameReducer } from './game';
import { ListState, listReducer } from './list';
import { settingsReducer, SettingsState } from './settings';

export interface AppState {
  game: GameState;
  list: ListState;
  settings: SettingsState;
}

export const reducers: ActionReducerMap<AppState> = {
  game: gameReducer,
  list: listReducer,
  settings: settingsReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
