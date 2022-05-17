import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[br-tooltip]'
})
export class TooltipDirective implements OnInit{

  @Input('br-tooltip') text: string;

  constructor(protected el: ElementRef, protected renderer: Renderer2) { }

  ngOnInit(): void{
    console.log(this.text);
  }
}
