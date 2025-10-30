import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entretenimiento } from './entretenimiento';

describe('Entretenimiento', () => {
  let component: Entretenimiento;
  let fixture: ComponentFixture<Entretenimiento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Entretenimiento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Entretenimiento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
