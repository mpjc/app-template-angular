import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListItem } from '@/store/list';

@Component({
  selector: 'ata-list-item-view',
  templateUrl: './list-item-view.component.html',
  styleUrls: ['./list-item-view.component.scss']
})
export class ListItemViewComponent {
  @Input() item: ListItem;
  @Output() toggle = new EventEmitter<ListItem>();
  @Output() edit = new EventEmitter<ListItem>();
  @Output() remove = new EventEmitter<ListItem>();
}
