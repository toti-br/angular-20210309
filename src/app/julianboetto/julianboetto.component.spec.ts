import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JulianboettoComponent } from './julianboetto.component';

describe('JulianboettoComponent', () => {
  let component: JulianboettoComponent;
  let fixture: ComponentFixture<JulianboettoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JulianboettoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JulianboettoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
