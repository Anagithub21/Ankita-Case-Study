import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecountdownTimeComponent } from './servicecountdown-time.component';

describe('ServicecountdownTimeComponent', () => {
  let component: ServicecountdownTimeComponent;
  let fixture: ComponentFixture<ServicecountdownTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicecountdownTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecountdownTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
