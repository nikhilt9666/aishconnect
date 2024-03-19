import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOverviewDailyComponent } from './sales-overview-daily.component';

describe('SalesOverviewDailyComponent', () => {
  let component: SalesOverviewDailyComponent;
  let fixture: ComponentFixture<SalesOverviewDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesOverviewDailyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesOverviewDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
