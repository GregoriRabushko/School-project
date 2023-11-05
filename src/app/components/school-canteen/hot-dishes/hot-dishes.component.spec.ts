import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotDishesComponent } from './hot-dishes.component';

describe('HotDishesComponent', () => {
  let component: HotDishesComponent;
  let fixture: ComponentFixture<HotDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotDishesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
