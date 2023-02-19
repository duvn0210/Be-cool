import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodosComponent } from './metodos.component';

describe('MetodosComponent', () => {
  let component: MetodosComponent;
  let fixture: ComponentFixture<MetodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
