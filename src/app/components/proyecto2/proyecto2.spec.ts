import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto2 } from './proyecto2';

describe('Proyecto2', () => {
  let component: Proyecto2;
  let fixture: ComponentFixture<Proyecto2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proyecto2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proyecto2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
