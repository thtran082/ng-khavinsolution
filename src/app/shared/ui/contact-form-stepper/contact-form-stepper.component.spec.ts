import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedContactFormStepperComponent } from './contact-form-stepper.component';

describe('SharedContactFormStepperComponent', () => {
  let component: SharedContactFormStepperComponent;
  let fixture: ComponentFixture<SharedContactFormStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedContactFormStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedContactFormStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
