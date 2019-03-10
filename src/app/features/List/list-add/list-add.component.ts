import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ata-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.scss']
})
export class ListAddComponent {
  @Output() add = new EventEmitter<string>();
  inputValue = '';

  addItem() {
    this.add.emit(this.inputValue);
    this.inputValue = '';
  }
}
