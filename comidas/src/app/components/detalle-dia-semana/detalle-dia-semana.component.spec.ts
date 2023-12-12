import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDiaSemanaComponent } from './detalle-dia-semana.component';

describe('DetalleDiaSemanaComponent', () => {
  let component: DetalleDiaSemanaComponent;
  let fixture: ComponentFixture<DetalleDiaSemanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleDiaSemanaComponent]
    });
    fixture = TestBed.createComponent(DetalleDiaSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
