import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Option } from '../option.interface';
import { OptionComponent } from '../option/option.component';

@Component({
  selector: 'br-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  isOpened: boolean = false;
  @Input('placeholder') title: string = 'Select option(s)';
  selectedValuesStr: string;
  selectedValues: Option[] = [];
  @Input('name') optionName: string;
  @Input() multiple: string;
  width: string;
  @ContentChildren(OptionComponent) optionList: QueryList<OptionComponent>;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}
  ngAfterContentInit(): void {
    if (!this.optionName) {
      this.optionName = 'name' + Math.random().toString(5).slice(2);
    }
    this.setSelectedByDefault(this.optionList);

    // if (!this.title) return;
    // const optionListWidth: number | undefined = this.optionList.get(1)?.width;
    // if (!optionListWidth) return;
    // this.width = `${optionListWidth - 20}px`;
    // console.log(this.optionList);

    // this.width = `${this.optionsBlock.nativeElement.offsetWidth}px`;
    // this.ref.detectChanges();
  }

  ngOnInit(): void {
    const select: HTMLElement = this.el.nativeElement;
    const label: ChildNode | null = select.previousSibling;
    const formField: ChildNode | null = select.parentElement;

    if (!label || !this.title) return;
    this.setActiveLabelStyles(label as HTMLElement);
    this.renderer.setStyle(label, 'color', '#777');
  }

  @HostBinding('style.width') get getWidth() {
    return this.width;
  }
  @HostBinding('attr.select-open') get getOpen() {
    return this.isOpened;
  }
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (this.el.nativeElement.contains(event.target)) return;
    this.isOpened = false;

    const label: HTMLElement = this.el.nativeElement.previousSibling;
    if (!label) return;
    this.renderer.setStyle(label, 'color', '#818181');
    if (this.title || this.selectedValuesStr) return;

    this.renderer.setStyle(label, 'font-size', '16px');
    this.renderer.setStyle(label, 'top', '22px');
    this.renderer.setStyle(label, 'line-height', '24px');
  }

  setSelectedByDefault(optionList: QueryList<OptionComponent>): void {
    optionList.forEach((option) => {
      let isMultiple: boolean = false;
      if (this.multiple != undefined) {
        isMultiple = true;
        option.isMultiple = true;
      }
      const isChecked = option.option.isChecked;
      option.name = this.optionName;
      if (isChecked) {
        if (!isMultiple) {
          if (this.selectedValues.length) return;
        }
        this.selectedValues.push(option.option);
      }
      this.selectedValuesStr = this.getSelectTitle(this.selectedValues);
      option.getOnCheckEmitter().subscribe((o) => {
        const isChecked = o.isChecked;

        if (!isMultiple) {
          this.selectedValues[0] = o;
          this.cdr.detectChanges();
          this.isOpened = false;
        } else {
          if (isChecked) {
            this.selectedValues.push(o);
          } else {
            this.selectedValues = this.selectedValues.filter(
              (opt) => opt.value != o.value
            );
          }
        }
        this.selectedValuesStr = this.getSelectTitle(this.selectedValues);
      });
    });
  }
  getSelectTitle(selectedValues: Option[]): string {
    if (selectedValues.length > 1)
      return selectedValues.length + ' items selected';
    else if (selectedValues.length == 1) return selectedValues[0].text;
    else return (this.selectedValuesStr = '');
  }
  setActiveLabelStyles(label: HTMLElement): void {
    this.renderer.setStyle(label, 'font-size', '11px');
    this.renderer.setStyle(label, 'top', '-2px');
    this.renderer.setStyle(label, 'line-height', '12px');
    this.renderer.setStyle(label, 'color', '#1672EC');
  }

  handleOpen(event: Event) {
    this.isOpened = !this.isOpened;

    const title: HTMLElement = event.target as HTMLElement;
    const label: HTMLElement = title.parentElement
      ?.previousSibling as HTMLElement;
    if (!label || this.selectedValuesStr) return;

    this.setActiveLabelStyles(label);
  }
}
