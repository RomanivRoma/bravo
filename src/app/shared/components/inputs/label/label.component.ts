import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'br-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent implements OnInit {
  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'pointer-events', 'none');
  }

  ngOnInit(): void {}
}
