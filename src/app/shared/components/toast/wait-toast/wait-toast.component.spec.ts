import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitToastComponent } from './wait-toast.component';

describe('WaitToastComponent', () => {
  let component: WaitToastComponent;
  let fixture: ComponentFixture<WaitToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
