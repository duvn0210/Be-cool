import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForosindiComponent } from './forosindi.component';

describe('ForosindiComponent', () => {
  let component: ForosindiComponent;
  let fixture: ComponentFixture<ForosindiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForosindiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForosindiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
