import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAlertsComponent } from './info-alerts.component';

describe('InfoAlertsComponent', () => {
  let component: InfoAlertsComponent;
  let fixture: ComponentFixture<InfoAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAlertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
