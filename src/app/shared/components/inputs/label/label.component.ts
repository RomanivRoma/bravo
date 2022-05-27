import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'br-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent implements OnInit {
  constructor(protected el: ElementRef, protected renderer: Renderer2) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.setLabelStyle();

  }
  setLabelStyle(): void {
    const parent: HTMLElement = this.el.nativeElement.parentElement;
    
    const width: number = (parent.offsetWidth - 40);
    
    this.renderer.setStyle(this.el.nativeElement, 'max-width', `${width < 0 ? 0 : width}px`);
    this.renderer.setStyle(this.el.nativeElement, 'pointer-events', 'none');
  }
}
