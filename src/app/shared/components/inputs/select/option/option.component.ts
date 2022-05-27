import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { Option } from '../option.interface';

@Component({
  selector: 'br-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
})
export class OptionComponent implements OnInit {
  @Input() value: string;
  @Input() name: string;
  option: Option;
  @Input('selected') isChecked: string = 'false';
  width: number;
  @Output() check: EventEmitter<Option> = new EventEmitter();
  id: string;
  isMultiple: boolean = false;
  
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.isChecked =
      this.isChecked == '' || this.isChecked === 'true' ? 'true' : 'false';
    this.option = {
      value: this.value,
      isChecked : this.isChecked === 'true',
      text: this.el.nativeElement.textContent,
    };
    this.id = 'id' + Math.random().toString(16).slice(2);
 
  }
  ngAfterViewInit(): void {
  }

  @HostBinding('class.multipleOption')
  get isMultipleOption(){
    return this.isMultiple;
  }
  onCheck(): void {
    this.option.isChecked = !this.option.isChecked;
    this.check.emit(this.option);
  }
  getOnCheckEmitter(): EventEmitter<Option>{
    return this.check
  }
}
