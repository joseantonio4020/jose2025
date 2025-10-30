import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto1 } from './proyecto1';

describe('Proyecto1', () => {
  let component: Proyecto1;
  let fixture: ComponentFixture<Proyecto1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proyecto1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proyecto1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
