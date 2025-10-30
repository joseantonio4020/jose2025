import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gustos } from './gustos';

describe('Gustos', () => {
  let component: Gustos;
  let fixture: ComponentFixture<Gustos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gustos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gustos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
