import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSelectListComponent } from './home-select-list.component';

describe('HomeSelectListComponent', () => {
  let component: HomeSelectListComponent;
  let fixture: ComponentFixture<HomeSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSelectListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
