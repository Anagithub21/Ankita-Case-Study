import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicelogTimeStampComponent } from './servicelog-time-stamp.component';

describe('ServicelogTimeStampComponent', () => {
  let component: ServicelogTimeStampComponent;
  let fixture: ComponentFixture<ServicelogTimeStampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicelogTimeStampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicelogTimeStampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
