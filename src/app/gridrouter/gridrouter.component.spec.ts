import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridrouterComponent } from './gridrouter.component';

describe('GridrouterComponent', () => {
  let component: GridrouterComponent;
  let fixture: ComponentFixture<GridrouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridrouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridrouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
