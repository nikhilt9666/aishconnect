import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadbodyComponent } from './dashboadbody.component';

describe('DashboadbodyComponent', () => {
  let component: DashboadbodyComponent;
  let fixture: ComponentFixture<DashboadbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboadbodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboadbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
