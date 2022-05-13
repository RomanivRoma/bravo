import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[br-select]'
})
export class SelectDirective {

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    this.setStyle('border', '1px solid #A1A1A1');
    this.setStyle('border-radius', '8px');
    this.setStyle('background', '#FFFFFF');
    this.setStyle('padding', '12px');
    this.setStyle('font-weight', '400');
    this.setStyle('font-size', '16px');
    this.setStyle('outline', 'none');
  }

  ngOnInit() {
    const select: HTMLSelectElement = this.el.nativeElement;
    const label: HTMLLabelElement = this.el.nativeElement.previousSibling;
    if(!select.options.length)
      select.style.width = label.offsetWidth + 35 + 'px'
    if(!label || !select.value) return
    this.renderer.setStyle(label, 'font-size', '11px');  
    this.renderer.setStyle(label, 'top', '-2px');  
    this.renderer.setStyle(label, 'line-height', '12px');  
    this.renderer.setStyle(label, 'color', '#777');  
  }

  @HostListener('focusout', ['$event.target'])
  outFocus(select: HTMLSelectElement){
    this.setStyle('border', '1px solid #A1A1A1')
    const label: ChildNode | null = select.previousSibling;
    if(!label) return
    this.renderer.setStyle(label, 'color', '#aaa');  
    if(select.value) return
    this.renderer.setStyle(label, 'font-size', '16px');  
    this.renderer.setStyle(label, 'top', '22px');  
    this.renderer.setStyle(label, 'line-height', '24px');  
  }
  @HostListener('focus', ['$event.target'])
  onFocus(select: HTMLSelectElement){
    this.setStyle('border', '1.5px solid #1672EC')

    const label: ChildNode | null = select.previousSibling;
    if(!label) return;
    this.renderer.setStyle(label, 'font-size', '11px');  
    this.renderer.setStyle(label, 'top', '-2px');  
    this.renderer.setStyle(label, 'line-height', '12px');  
    this.renderer.setStyle(label, 'color', '#1672EC');  
  }

  protected setStyle(style: string, property: string) {
    this.renderer.setStyle(this.el.nativeElement, style, property);  
  }
}
