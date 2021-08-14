import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicetimeLimitComponent } from './servicetime-limit.component';

describe('ServicetimeLimitComponent', () => {
  let component: ServicetimeLimitComponent;
  let fixture: ComponentFixture<ServicetimeLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicetimeLimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicetimeLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
