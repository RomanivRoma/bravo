import { AfterContentInit, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { ChipItemComponent } from '../chip-item/chip-item.component';

@Component({
  selector: 'br-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.scss']
})
export class ChipListComponent implements OnInit {

  @ContentChildren(ChipItemComponent) chipsList!: QueryList<ChipItemComponent>;
  // @ContentChild(ChipItemComponent) chipsRef : ElementRef;

  chips: ChipItemComponent[];

  constructor(private cd: ChangeDetectorRef) { }


  ngOnInit(): void {
  }



  ngAfterViewInit (): void {
    console.log(this.chipsList);
    
    this.chips = this.chipsList.toArray();
    this.chips.forEach((el, i) =>{
      console.log(el);
      el.remove.subscribe(() =>{
        this.handleRemove(i)
      })
    })
    this.cd.detectChanges();
  }

  handleRemove(index: number){
    this.chips = this.chips.filter((el, i) => i != index);
    console.log(this.chips)
  }
}
