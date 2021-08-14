import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicestartPauseComponent } from './servicestart-pause.component';

describe('ServicestartPauseComponent', () => {
  let component: ServicestartPauseComponent;
  let fixture: ComponentFixture<ServicestartPauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicestartPauseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicestartPauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
