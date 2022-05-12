import { Component, OnInit, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'br-chip-item',
  templateUrl: './chip-item.component.html',
  styleUrls: ['./chip-item.component.scss']
})
export class ChipItemComponent implements OnInit {

  @Output() remove: EventEmitter<any> = new EventEmitter();
  @ViewChild(TemplateRef) template: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  handleRemove() {
    this.remove.emit()
  }

}
