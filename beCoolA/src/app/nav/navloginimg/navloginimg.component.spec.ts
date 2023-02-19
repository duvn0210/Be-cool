import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavloginimgComponent } from './navloginimg.component';

describe('NavloginimgComponent', () => {
  let component: NavloginimgComponent;
  let fixture: ComponentFixture<NavloginimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavloginimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavloginimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
