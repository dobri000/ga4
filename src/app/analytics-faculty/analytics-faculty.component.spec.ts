import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsFacultyComponent } from './analytics-faculty.component';

describe('AnalyticsFacultyComponent', () => {
  let component: AnalyticsFacultyComponent;
  let fixture: ComponentFixture<AnalyticsFacultyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyticsFacultyComponent]
    });
    fixture = TestBed.createComponent(AnalyticsFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
