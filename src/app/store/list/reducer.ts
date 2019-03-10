import { Action } from '@ngrx/store';
import { ListActions, AddItem, EditItem, RemoveItem, ToggleItem } from './actions';
import { ListState } from './list';

export const initialState: ListState = {
  index: 0,
  items: [],
};

export function listReducer(state = initialState, action: Action): ListState {
  switch (action.type) {
    case ListActions.AddItem: {
      const { value } = (action as AddItem).payload;
      const items = [...state.items, { id: state.index++, value, checked: false }];
      return { ...state, items };
    }
    case ListActions.EditItem: {
      const { id, value } = (action as EditItem).payload;
      const items = state.items.map(i => i.id === id ? { ...i, value } : i);
      return { ...state, items };
    }
    case ListActions.RemoveItem: {
      const { id } = (action as RemoveItem).payload;
      const items = state.items.filter((i) => i.id !== id);
      return { ...state, items };
    }
    case ListActions.ToggleItem: {
      const { id } = (action as ToggleItem).payload;
      const items = state.items.map((i) => i.id === id ? { ...i, checked: !i.checked } : i);
      return { ...state, items };
    }
    case ListActions.Clear: {
      return { ...state, items: [] };
    }
    default:
      return state;
  }
}
