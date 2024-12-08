import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lessor-delete',
  templateUrl: './lessor-delete.component.html',
  styleUrls: ['./lessor-delete.component.css']
})
export class LessorDeleteComponent {
  @Input('listId')//parent vers fils
  listId = []
  @Output() close: EventEmitter<Boolean> = new EventEmitter();//fils vers parent
  closeAction() {
    this.close.emit(true)
  }

}
