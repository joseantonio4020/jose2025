import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoEmpece } from './como-empece';

describe('ComoEmpece', () => {
  let component: ComoEmpece;
  let fixture: ComponentFixture<ComoEmpece>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComoEmpece]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComoEmpece);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
