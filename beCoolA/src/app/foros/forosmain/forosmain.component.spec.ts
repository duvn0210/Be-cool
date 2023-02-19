import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForosmainComponent } from './forosmain.component';

describe('ForosmainComponent', () => {
  let component: ForosmainComponent;
  let fixture: ComponentFixture<ForosmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForosmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForosmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
