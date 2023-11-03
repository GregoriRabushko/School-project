import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolCanteenComponent } from './school-canteen.component';

describe('SchoolCanteenComponent', () => {
  let component: SchoolCanteenComponent;
  let fixture: ComponentFixture<SchoolCanteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolCanteenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolCanteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
