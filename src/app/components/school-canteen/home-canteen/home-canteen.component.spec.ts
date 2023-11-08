import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCanteenComponent } from './home-canteen.component';

describe('HomeCanteenComponent', () => {
  let component: HomeCanteenComponent;
  let fixture: ComponentFixture<HomeCanteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCanteenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCanteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
