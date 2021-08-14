import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecounterComponent } from './servicecounter.component';

describe('ServicecounterComponent', () => {
  let component: ServicecounterComponent;
  let fixture: ComponentFixture<ServicecounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicecounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
