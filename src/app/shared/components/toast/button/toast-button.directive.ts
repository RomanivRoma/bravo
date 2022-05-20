import {
  ChangeDetectorRef,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { SuccessToastComponent } from '../success-toast/success-toast.component';
import { ToastComponent } from '../toast/toast.component';
import { WaitToastComponent } from '../wait-toast/wait-toast.component';


@Directive({
  selector: '[br-toast-button]',
})
export class ToastButtonDirective implements OnInit {
  @Input() time: string = '5000';
  @Input() type: 'success' | 'wait' = 'success';
  toast: ComponentRef<ToastComponent>;
  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
  }
  @HostListener('click', ['$event']) onClick() {
    if(!this.toast){
      this.toast = this.createToastComponent();
    }
    this.toast.instance.showAlert();
  }

  createToastComponent(): ComponentRef<ToastComponent> {
    const type: any = {
      'success': {
        component: SuccessToastComponent,
        background: '#1F8B24'
      },
      'wait': {
        component: WaitToastComponent,
        background: '#ED9526'
      }
    }
    const toastType = this.viewContainerRef.createComponent(type[this.type].component);
    const toast: ComponentRef<ToastComponent> = this.viewContainerRef.createComponent(ToastComponent, {projectableNodes:[[toastType.location.nativeElement]]});
    toast.instance.background = type[this.type].background;
    toast.instance.time = +this.time; 
    return toast;
  }
}
