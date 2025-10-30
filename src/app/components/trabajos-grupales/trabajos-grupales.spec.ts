import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajosGrupales } from './trabajos-grupales';

describe('TrabajosGrupales', () => {
  let component: TrabajosGrupales;
  let fixture: ComponentFixture<TrabajosGrupales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrabajosGrupales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajosGrupales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
