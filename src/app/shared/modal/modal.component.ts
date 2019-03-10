import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ata-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() showClose: boolean;
  @Input() closeOnBgClick: boolean;
  @Output() close = new EventEmitter();

  @ViewChild('modalBackground') backgroundEl: ElementRef;

  tryClose($event: MouseEvent) {
    if ($event.target !== this.backgroundEl.nativeElement) {
      return;
    }
    if (this.closeOnBgClick) {
      this.close.emit();
    }
  }

  doClose() {
    this.close.emit();
  }
}
