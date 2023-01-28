import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsToSchoolComponent } from './items-to-school.component';

describe('ItemsToSchoolComponent', () => {
  let component: ItemsToSchoolComponent;
  let fixture: ComponentFixture<ItemsToSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsToSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsToSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
