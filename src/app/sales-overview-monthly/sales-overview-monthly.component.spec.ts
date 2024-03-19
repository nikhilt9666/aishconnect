import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOverviewMonthlyComponent } from './sales-overview-monthly.component';

describe('SalesOverviewMonthlyComponent', () => {
  let component: SalesOverviewMonthlyComponent;
  let fixture: ComponentFixture<SalesOverviewMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesOverviewMonthlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesOverviewMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
