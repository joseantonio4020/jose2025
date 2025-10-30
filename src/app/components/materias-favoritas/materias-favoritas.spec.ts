import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasFavoritas } from './materias-favoritas';

describe('MateriasFavoritas', () => {
  let component: MateriasFavoritas;
  let fixture: ComponentFixture<MateriasFavoritas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateriasFavoritas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriasFavoritas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
