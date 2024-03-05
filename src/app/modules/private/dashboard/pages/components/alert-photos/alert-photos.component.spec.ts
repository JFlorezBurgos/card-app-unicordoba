import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPhotosComponent } from './alert-photos.component';

describe('AlertPhotosComponent', () => {
  let component: AlertPhotosComponent;
  let fixture: ComponentFixture<AlertPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
