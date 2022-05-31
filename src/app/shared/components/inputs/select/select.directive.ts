import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[brSelect]',
})
export class SelectDirective {
  private label: HTMLElement;
  private hasLabel: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const select: HTMLSelectElement = this.el.nativeElement;
    this.label = this.el.nativeElement.previousSibling;
    this.hasLabel = this.label?.tagName === 'BR-LABEL';
    this.setSelectStyles();

    this.setArrowStyle();

    if (!this.label || !select.value) return;

    // const selectedValue: string = select.options[select.selectedIndex]?.text;

    if (!select.options?.length) {
      const arrowWidth: number = 45;
      this.renderer.setStyle(
        select,
        'width',
        `${this.label.offsetWidth + arrowWidth}px`
      );
    }
    if (!this.hasLabel) return;
    this.setActiveLabelStyles(this.label);
    this.renderer.setStyle(this.label, 'color', '#777');
  }

  @HostListener('focusout', ['$event.target'])
  outFocus(select: HTMLSelectElement) {
    this.setStyle('border', '1.5px solid #A1A1A1');
    this.setArrowStyle();
    if (!this.hasLabel) return;

    this.renderer.setStyle(this.label, 'color', '#818181');
    if (select.value) return;
    this.renderer.setStyle(this.label, 'font-size', '16px');
    this.renderer.setStyle(this.label, 'top', '22px');
    this.renderer.setStyle(this.label, 'line-height', '24px');
  }
  @HostListener('focus', ['$event.target'])
  onFocus(select: HTMLSelectElement) {
    this.setStyle('border', '1.5px solid #1672EC');
    this.setActiveArrowStyle();
    if (!this.hasLabel) return;

    this.setActiveLabelStyles(this.label);
  }

  setArrowStyle(): void {
    this.setStyle(
      'background-image',
      `linear-gradient(45deg, transparent 50%, #616161 50%),
       linear-gradient(135deg, #616161 50%, transparent 50%)`
    );
    this.setStyle(
      'background-position',
      `calc(100% - 20px) calc(1em + 2px),
       calc(100% - 15px) calc(1em + 2px)`
    );
    this.setStyle(
      'background-size',
      `5px 5px,
       5px 5px,
       1.5em 1.5em`
    );
    this.setStyle('background-repeat', 'no-repeat');
  }
  setActiveArrowStyle(): void {
    this.setStyle(
      'background-image',
      `linear-gradient(45deg, #1672EC 50%, transparent 50%),
       linear-gradient(135deg, transparent 50%, #1672EC 50%)`
    );
    this.setStyle(
      'background-position',
      `calc(100% - 15px) 1em,
       calc(100% - 20px) 1em,
       calc(100% - .5em) .5em`
    );
    this.setStyle(
      'background-size',
      `6px 6px,
       6px 6px,
       1.5em 1.5em`
    );
    this.setStyle('background-repeat', 'no-repeat');
  }
  setSelectStyles(): void {
    this.setStyle('border', '1.5px solid #A1A1A1');
    this.setStyle('border-radius', '8px');
    this.setStyle('background', '#FFFFFF');
    this.setStyle('padding', '12px');
    this.setStyle('font-weight', '400');
    this.setStyle('font-size', '16px');
    this.setStyle('outline', 'none');
    this.setStyle('margin', '0');
    this.setStyle('appearance', 'none');
    this.setStyle('padding-right', '36px');
  }

  setActiveLabelStyles(label: HTMLElement): void {
    this.renderer.setStyle(label, 'font-size', '11px');
    this.renderer.setStyle(label, 'top', '-2px');
    this.renderer.setStyle(label, 'line-height', '12px');
    this.renderer.setStyle(label, 'color', '#1672EC');
  }

  protected setStyle(style: string, property: string): void {
    this.renderer.setStyle(this.el.nativeElement, style, property);
  }
}
