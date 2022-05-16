import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { interval, map, Observable, Subject, takeUntil, takeWhile } from 'rxjs';

@Component({
  selector: 'br-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  @Input() time: number = 5000;
  @Input() type: 'success' | 'wait' = 'success';
  progress: number = 0;
  active: boolean = false;
  timer$: Observable<number>;
  destroy$: Subject<boolean> = new Subject();
  stopProgress: number = 110;

  constructor() { }

  ngOnInit(): void {
    this.timer$ = interval(this.time / this.stopProgress)
    .pipe(
      takeWhile(() => this.active),
      takeUntil(this.destroy$),
      map(val => {
        if(val >= this.stopProgress) {
          this.hideAlert()
          return 0;
        }
        return val;
      })
    )
  }

  @HostBinding('attr.active') get isActive(): boolean {
    return this.active;
  }
  @HostBinding('attr.type') get attribute(): string {
    return this.type;
  }
  showAlert(){
    if(this.active) return;
    this.active = true;
    this.timer$.subscribe(val =>{
      this.progress = val; 
    })
  }
  hideAlert(){
    this.progress = 0
    this.active = false; 
    this.destroy$.next(true)
    this.destroy$.complete()
  }

}
