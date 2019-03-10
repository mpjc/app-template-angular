import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@/store';
import { ListItem, ToggleItem, RemoveItem, EditItem } from '@/store/list';

@Component({
  selector: 'ata-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent {
  @Input() items: ListItem[];
  editItem: ListItem | null = null;

  constructor(private readonly store: Store<AppState>) {
  }

  toggleListItem(item: ListItem) {
    this.store.dispatch(new ToggleItem({ id: item.id }));
  }

  updateListItem(payload: { id: number, value: string }) {
    this.store.dispatch(new EditItem(payload));
    this.clearEditItem();
  }

  removeListItem(item: ListItem) {
    this.store.dispatch(new RemoveItem({ id: item.id }));
  }

  setEditItem(item: ListItem) {
    this.editItem = item;
  }

  clearEditItem() {
    this.editItem = null;
  }

}
