import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ToastComponent } from '../toast/toast.component';

@Directive({
  selector: '[br-toast-button]'
})
export class ToastButtonDirective implements OnInit {

  @Input() time: string = '5000';
  @Input() type: 'success' | 'wait' = 'success';
  toast: ComponentRef<ToastComponent>;
  constructor(private el: ElementRef, 
            private renderer: Renderer2,
            private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.toast = this.viewContainerRef.createComponent(ToastComponent);
    this.toast.instance.time = +this.time;
    this.toast.instance.type = this.type;
    this.toast.location.nativeElement.setAttribute('type', this.type);
  }

  @HostListener('click', ['$event'])
  onClick(){
    console.log(this.toast);
    this.toast.instance.showAlert();
  }

}

