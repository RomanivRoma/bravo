import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { TooltipComponent } from '../tooltip/tooltip.component';

interface Tooltip {
  text: string,
  position: 'top' | 'right' | 'bottom' | 'left'
}

@Directive({
  selector: '[br-tooltip]'
})
export class TooltipDirective implements OnInit{

  @Input('br-tooltip-position') position: 'top' | 'right' | 'bottom' | 'left';

  @Input('br-tooltip') text: string;

  tooltip: ComponentRef<TooltipComponent>;

  constructor(private el: ElementRef, 
              private renderer: Renderer2,
              private viewContainerRef: ViewContainerRef) { }

  @HostListener('mouseover') onHover(){
    this.renderer.setStyle(this.tooltip.location.nativeElement, 'visibility', 'visible');
    this.renderer.setStyle(this.tooltip.location.nativeElement, 'opacity', '1');
  }
  @HostListener('mouseout') outHover(){
    this.renderer.setStyle(this.tooltip.location.nativeElement, 'visibility', 'hidden');
    this.renderer.setStyle(this.tooltip.location.nativeElement, 'opacity', '0');
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    if(!this.position) this.position = 'top';
    const tooltip: Tooltip = {
      text: this.text,
      position: this.position
    };
    this.tooltip = this.createTooltipComponent(this.el.nativeElement, tooltip);
  }
  ngAfterContentInit(){
    this.setPosition(this.tooltip.location.nativeElement, this.position);
  }

  setPosition(tooltip: HTMLElement, position: string): void{
    const isHorizontal: boolean = position == 'left' || position == 'right';
    const afterBlockWidth: number = 18;
    const indent: number = (isHorizontal ? tooltip.offsetWidth : tooltip.offsetHeight) + afterBlockWidth;
    this.renderer.setStyle(tooltip, position, `-${indent}px`);
  }
  createTooltipComponent(element: HTMLElement, tooltipObj: Tooltip): ComponentRef<TooltipComponent>{
    const tooltip: ComponentRef<TooltipComponent> = this.viewContainerRef.createComponent(TooltipComponent);
    const tooltipElement: HTMLElement = tooltip.location.nativeElement;
    tooltip.instance.text = tooltipObj.text;
    this.renderer.setAttribute(tooltipElement, 'position', tooltipObj.position);
    this.renderer.appendChild(element, tooltipElement);

    return tooltip;
  }
}
