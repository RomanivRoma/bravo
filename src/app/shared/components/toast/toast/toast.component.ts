import {
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import {
  delay,
  interval,
  map,
  Observable,
  retry,
  Subject,
  takeUntil,
  takeWhile,
} from 'rxjs';

@Component({
  selector: 'br-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  time: number = 5000;
  @Input() background: string = '#1F8B24';
  progress: number = 0;
  active: boolean = false;
  timer$: Observable<number>;
  destroy$: Subject<boolean> = new Subject();
  stopProgress: number = 105;
  stoppedTime: number = 0;

  constructor() {
    const interval: number = this.time / this.stopProgress;
    this.timer$ = this.createTimer(interval);
  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  @HostBinding('attr.active') get isActive(): boolean {
    return this.active;
  }

  @HostListener('mouseover') onHover(): void {
    this.stoppedTime = this.progress + 1;
    this.destroy$.next(true);
  }
  @HostListener('mouseout') outHover(): void {
    this.timer$.subscribe((val) => {
      this.progress = val;
    });
  }

  createTimer(interv: number): Observable<number> {
    return interval(interv).pipe(
      takeWhile(() => this.active),
      takeUntil(this.destroy$),
      map((val) => {
        const time = val + this.stoppedTime;
        if (time >= this.stopProgress) {
          this.hideAlert();
          return 0;
        }
        return time;
      })
    );
  }
  showAlert(): void {
    if (this.active) return;
    this.active = true;
    this.timer$.subscribe((val) => {
      this.progress = val;
    });
  }
  hideAlert(): void {
    this.progress = 0;
    this.stoppedTime = 0;
    this.active = false;
    this.destroy$.next(true);
  }
}
