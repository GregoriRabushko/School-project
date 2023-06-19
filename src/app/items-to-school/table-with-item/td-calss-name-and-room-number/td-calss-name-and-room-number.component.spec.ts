import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdCalssNameAndRoomNumberComponent } from './td-calss-name-and-room-number.component';

describe('TdCalssNameAndRoomNumberComponent', () => {
  let component: TdCalssNameAndRoomNumberComponent;
  let fixture: ComponentFixture<TdCalssNameAndRoomNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdCalssNameAndRoomNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdCalssNameAndRoomNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
