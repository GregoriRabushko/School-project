import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuckShopComponent } from './tuck-shop.component';

describe('TuckShopComponent', () => {
  let component: TuckShopComponent;
  let fixture: ComponentFixture<TuckShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuckShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuckShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
