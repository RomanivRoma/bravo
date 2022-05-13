import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[br-input]'
})
export class InputDirective implements OnInit{

  @Input() maxlength: string;
  
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
    const input = this.el.nativeElement;
    const label = this.el.nativeElement.previousSibling;

    if(this.maxlength){
      const formField = this.el.nativeElement.parentElement
      this.renderer.addClass(formField, 'len')
      this.renderer.setAttribute(formField, 'data-remaining', input.value.length)
      this.renderer.setAttribute(formField, 'data-limit', this.maxlength)

    }

    if(!label || (!input.value && !input.placeholder)) return;
    this.renderer.setStyle(label, 'font-size', '11px');  
    this.renderer.setStyle(label, 'top', '-2px');  
    this.renderer.setStyle(label, 'line-height', '12px');  
    this.renderer.setStyle(label, 'color', '#777');  
  }

  @HostListener('focusout', ['$event.target'])
  outFocus(input: HTMLInputElement){
    this.setStyle('border', '1px solid #A1A1A1')

    const label: ChildNode | null = input.previousSibling;
    if(!label) return
    this.renderer.setStyle(label, 'color', '#aaa');  
    if(input.placeholder || input.value) return
    this.renderer.setStyle(label, 'font-size', '16px');  
    this.renderer.setStyle(label, 'top', '22px');  
    this.renderer.setStyle(label, 'line-height', '24px');  
  }
  @HostListener('focus', ['$event.target'])
  onFocus(input: HTMLInputElement){
    this.setStyle('border', '1.5px solid #1672EC')

    const label: ChildNode | null = input.previousSibling;
    if(!label) return;
    this.renderer.setStyle(label, 'font-size', '11px');  
    this.renderer.setStyle(label, 'top', '-2px');  
    this.renderer.setStyle(label, 'line-height', '12px');  
    this.renderer.setStyle(label, 'color', '#1672EC');  
  }
  @HostListener('input', ['$event.target'])
  change(input: HTMLInputElement) {
    const formField = input.parentElement
    this.renderer.setAttribute(formField, 'data-remaining', input.value.length+'')
    
  }

  protected setStyle(style: string, property: string) {
    this.renderer.setStyle(this.el.nativeElement, style, property);  
  }
}
