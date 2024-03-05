import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateStudentComponent } from './validate-student.component';

describe('ValidateStudentComponent', () => {
  let component: ValidateStudentComponent;
  let fixture: ComponentFixture<ValidateStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
