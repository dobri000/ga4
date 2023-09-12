import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsCompanyComponent } from './analytics-company.component';

describe('AnalyticsCompanyComponent', () => {
  let component: AnalyticsCompanyComponent;
  let fixture: ComponentFixture<AnalyticsCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyticsCompanyComponent]
    });
    fixture = TestBed.createComponent(AnalyticsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
