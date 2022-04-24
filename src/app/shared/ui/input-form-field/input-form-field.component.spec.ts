import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedInputFormFieldComponent } from './input-form-field.component';

describe('SharedInputFormFieldComponent', () => {
  let component: SharedInputFormFieldComponent;
  let fixture: ComponentFixture<SharedInputFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedInputFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedInputFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
