import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDishesComponent } from './first-dishes.component';

describe('FirstDishesComponent', () => {
  let component: FirstDishesComponent;
  let fixture: ComponentFixture<FirstDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstDishesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
