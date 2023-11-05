import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideDishComponent } from './side-dish.component';

describe('SideDishComponent', () => {
  let component: SideDishComponent;
  let fixture: ComponentFixture<SideDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideDishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
