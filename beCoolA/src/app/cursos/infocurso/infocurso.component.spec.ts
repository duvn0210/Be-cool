import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocursoComponent } from './infocurso.component';

describe('InfocursoComponent', () => {
  let component: InfocursoComponent;
  let fixture: ComponentFixture<InfocursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfocursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfocursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
