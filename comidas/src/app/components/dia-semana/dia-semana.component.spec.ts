import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaSemanaComponent } from './dia-semana.component';

describe('DiaSemanaComponent', () => {
  let component: DiaSemanaComponent;
  let fixture: ComponentFixture<DiaSemanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiaSemanaComponent]
    });
    fixture = TestBed.createComponent(DiaSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
