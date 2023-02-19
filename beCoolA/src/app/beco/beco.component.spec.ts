import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecoComponent } from './beco.component';

describe('BecoComponent', () => {
  let component: BecoComponent;
  let fixture: ComponentFixture<BecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
