import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  TemplateRef,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'br-chip-item',
  templateUrl: './chip-item.component.html',
  styleUrls: ['./chip-item.component.scss'],
})
export class ChipItemComponent implements OnInit {
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  handleRemove() {
    this.remove.emit();
  }
}
