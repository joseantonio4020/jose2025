import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Motivaciones } from './motivaciones';

describe('Motivaciones', () => {
  let component: Motivaciones;
  let fixture: ComponentFixture<Motivaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Motivaciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Motivaciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
