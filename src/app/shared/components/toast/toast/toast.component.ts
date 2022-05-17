import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { BehaviorSubject, buffer, bufferWhen, interval, map, Observable, startWith, Subject, takeUntil, takeWhile, timer } from 'rxjs';

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
  stopProgress: number = 105;
  stoppedTime: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.timer$ = interval(this.time / this.stopProgress)
    .pipe(
      takeWhile(() => this.active),
      takeUntil(this.destroy$),
      map(val => {
        const time = val + this.stoppedTime;
        console.log(time);
        
        if(time >= this.stopProgress) {
          this.hideAlert()
          return 0;
        }
        return time;
      })
    )
  }
  ngOnDestroy(): void{
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  @HostBinding('attr.active') get isActive(): boolean {
    return this.active;
  }
  @HostBinding('attr.type') get attribute(): string {
    return this.type;
  }

  @HostListener('mouseover') onHover(): void{
    this.stoppedTime = this.progress + 1;
    this.destroy$.next(true);
  }
  @HostListener('mouseout') outHover(): void{
    this.timer$.subscribe(val =>{
      this.progress = val; 
    })
  }
  showAlert(): void{
    if(this.active) return;
    this.active = true;
    this.timer$.subscribe(val =>{      
      this.progress = val; 
    })
  }
  hideAlert(): void{
    this.progress = 0;
    this.stoppedTime = 0;
    this.active = false; 
    this.destroy$.next(true);
  }

}
