import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneWiseSaleComponent } from './zone-wise-sale.component';

describe('ZoneWiseSaleComponent', () => {
  let component: ZoneWiseSaleComponent;
  let fixture: ComponentFixture<ZoneWiseSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneWiseSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneWiseSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
