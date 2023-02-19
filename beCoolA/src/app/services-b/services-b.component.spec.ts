import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBComponent } from './services-b.component';

describe('ServicesBComponent', () => {
  let component: ServicesBComponent;
  let fixture: ComponentFixture<ServicesBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
