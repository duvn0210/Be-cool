import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresiesComponent } from './membresies.component';

describe('MembresiesComponent', () => {
  let component: MembresiesComponent;
  let fixture: ComponentFixture<MembresiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembresiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembresiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
