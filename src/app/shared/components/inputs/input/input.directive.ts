import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[br-input]'
})
export class InputDirective implements OnInit{

  @Input() maxlength: string;
  @Input() type: string;

  constructor(protected el: ElementRef, protected renderer: Renderer2) { }

  ngOnInit() {
    this.setInputStyles();
    const input = this.el.nativeElement;
    const label = this.el.nativeElement.previousSibling;
    if(this.maxlength){
      const formField = this.el.nativeElement.parentElement;
      this.setMaxLengthBlock(formField, input.value.length, this.maxlength);
    }
    if(!label || (!input.value && !input.placeholder) && this.isTextInputType(this.type)) return;
    this.setLabelStyles(label);  
    this.renderer.setStyle(label, 'color', '#818181');
  }

  @HostListener('focusout', ['$event.target'])
  outFocus(input: HTMLInputElement){
    this.setStyle('border', '1px solid #A1A1A1');

    const label: ChildNode | null = input.previousSibling;
    if(!label) return;
    this.renderer.setStyle(label, 'color', '#aaa'); 
     
    if(input.placeholder || input.value || !this.isTextInputType(this.type)) return;

    this.renderer.setStyle(label, 'font-size', '16px');  
    this.renderer.setStyle(label, 'top', '22px');  
    this.renderer.setStyle(label, 'line-height', '24px');  
  }
  @HostListener('focus', ['$event.target'])
  onFocus(input: HTMLInputElement){
    this.setStyle('border', '1.5px solid #1672EC')

    const label: ChildNode | null = input.previousSibling;
    if(!label) return;
    this.setLabelStyles(label as HTMLElement);
  }
  @HostListener('input', ['$event.target'])
  change(input: HTMLInputElement) {
    const formField = input.parentElement;
    this.renderer.setAttribute(formField, 'data-remaining', input.value.length+'');
    
  }
  setInputStyles(): void{
    this.setStyle('border', '1px solid #A1A1A1');
    this.setStyle('border-radius', '8px');
    this.setStyle('background', '#FFFFFF');
    this.setStyle('padding', '12px');
    this.setStyle('font-weight', '400');
    this.setStyle('font-size', '16px');
    this.setStyle('outline', 'none');
  }
  setLabelStyles(label: HTMLElement): void{
    this.renderer.setStyle(label, 'font-size', '11px');  
    this.renderer.setStyle(label, 'top', '-2px');  
    this.renderer.setStyle(label, 'line-height', '12px');  
    this.renderer.setStyle(label, 'color', '#1672EC');
  }
  setMaxLengthBlock(formField: HTMLElement, currLength: string, maxlength: string): void{
    this.renderer.addClass(formField, 'len');
    this.renderer.setAttribute(formField, 'data-remaining', currLength);
    this.renderer.setAttribute(formField, 'data-limit', maxlength);
  }

  isTextInputType(type: string): boolean {
    if(!type) return true;
    const isTextTypes: Array<string> = ['text', 'email', 'password', 'number', 'search', 'tel'];
    return isTextTypes.includes(type);
  }
  protected setStyle(style: string, property: string) {
    this.renderer.setStyle(this.el.nativeElement, style, property);  
  }
}
