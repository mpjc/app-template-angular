import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ListItem } from '@/store/list';

@Component({
  selector: 'ata-list-item-edit',
  templateUrl: './list-item-edit.component.html',
  styleUrls: ['./list-item-edit.component.scss']
})
export class ListItemEditComponent implements OnInit {
  @Input() item: ListItem;
  @Output() update = new EventEmitter<{ id: number, value: string }>();
  @Output() cancel = new EventEmitter();

  inputValue = '';

  ngOnInit() {
    this.inputValue = this.item.value;
  }

  updateItem() {
    this.update.emit({ id: this.item.id, value: this.inputValue });
  }

  cancelEdit() {
    this.cancel.emit();
  }
}
