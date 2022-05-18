import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ToastComponent } from '../toast/toast.component';

@Directive({
  selector: '[br-toast-button]'
})
export class ToastButtonDirective implements OnInit {

  @Input() time: string = '5000';
  @Input() type: 'success' | 'wait' = 'success';
  toast: ComponentRef<ToastComponent>;
  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.toast = this.createToastComponent();
  }

  @HostListener('click', ['$event']) onClick(){
    this.toast.instance.showAlert();
  }

  createToastComponent(): ComponentRef<ToastComponent>{
    const toast = this.viewContainerRef.createComponent(ToastComponent);
    toast.instance.time = +this.time;
    toast.instance.type = this.type;
    toast.location.nativeElement.setAttribute('type', this.type);
    return toast;
  }
}

