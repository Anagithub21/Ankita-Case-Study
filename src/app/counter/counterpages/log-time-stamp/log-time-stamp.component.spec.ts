import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTimeStampComponent } from './log-time-stamp.component';

describe('LogTimeStampComponent', () => {
  let component: LogTimeStampComponent;
  let fixture: ComponentFixture<LogTimeStampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogTimeStampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogTimeStampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
