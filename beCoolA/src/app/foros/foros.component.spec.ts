import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForosComponent } from './foros.component';

describe('ForosComponent', () => {
  let component: ForosComponent;
  let fixture: ComponentFixture<ForosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
