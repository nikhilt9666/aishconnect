import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCahrtPopupComponent } from './daily-cahrt-popup.component';

describe('DailyCahrtPopupComponent', () => {
  let component: DailyCahrtPopupComponent;
  let fixture: ComponentFixture<DailyCahrtPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyCahrtPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyCahrtPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
