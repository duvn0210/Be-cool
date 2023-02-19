import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreindiComponent } from './storeindi.component';

describe('StoreindiComponent', () => {
  let component: StoreindiComponent;
  let fixture: ComponentFixture<StoreindiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreindiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreindiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
