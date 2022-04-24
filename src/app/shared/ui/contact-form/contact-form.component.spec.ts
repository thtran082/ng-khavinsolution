import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedContactFormComponent } from './contact-form.component';

describe('SharedContactFormComponent', () => {
  let component: SharedContactFormComponent;
  let fixture: ComponentFixture<SharedContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedContactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
