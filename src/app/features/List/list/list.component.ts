import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { ListState, initialState, ListItem, AddItem, Clear } from '@/store/list';
import { Store } from '@ngrx/store';
import { AppState } from '@/store';

@Component({
  selector: 'ata-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  list: ListState;
  anyItems: boolean;
  checkedItems: ListItem[];
  uncheckedItems: ListItem[];

  private readonly list$: Observable<ListState>;
  private readonly subscription = new Subscription();

  constructor(private readonly store: Store<AppState>) {
    this.processState(initialState);
    this.list$ = store.select(s => s.list);
  }

  ngOnInit() {
    this.subscription.add(
      this.list$.subscribe(l => this.processState(l))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addItem(value: string) {
    this.store.dispatch(new AddItem({ value }));
  }

  clear() {
    this.store.dispatch(new Clear());
  }

  private processState(listState: ListState) {
    this.list = listState;
    this.anyItems = listState.items.length > 0;
    this.checkedItems = listState.items.filter(i => i.checked);
    this.uncheckedItems = listState.items.filter(i => !i.checked);
  }

}
