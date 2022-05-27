import {
  ChangeDetectorRef,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { ChipItemComponent } from '../chip-item/chip-item.component';

@Component({
  selector: 'br-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.scss'],
})
export class ChipListComponent implements OnInit {
  @ContentChildren(ChipItemComponent) chipsList!: QueryList<ChipItemComponent>;

  chips: ChipItemComponent[];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // console.log(this.chipsList);

    this.chips = this.chipsList.toArray();
    this.chips.forEach((el, i) => {
      el.remove.subscribe(() => {
        this.handleRemove(i);
      });
    });
  }

  handleRemove(index: number) {
    this.chips = this.chips.filter((el, i) => i != index);
    console.log(this.chips);
  }
}
