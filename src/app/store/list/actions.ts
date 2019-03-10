import { Action } from '@ngrx/store';

export enum ListActions {
  AddItem = '[List] AddItem',
  RemoveItem = '[List] RemoveItem',
  EditItem = '[List] EditItem',
  ToggleItem = '[List] ToggleItem',
  Clear = '[List] Clear',
}

export class AddItem implements Action {
  readonly type = ListActions.AddItem;
  constructor(public payload: { value: string }) { }
}

export class RemoveItem implements Action {
  readonly type = ListActions.RemoveItem;
  constructor(public payload: { id: number }) { }
}

export class EditItem implements Action {
  readonly type = ListActions.EditItem;
  constructor(public payload: { id: number, value: string }) { }
}

export class ToggleItem implements Action {
  readonly type = ListActions.ToggleItem;
  constructor(public payload: { id: number }) { }
}


export class Clear implements Action {
  readonly type = ListActions.Clear;
}

