import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsCoreFourthSectionComponent } from './fourth-section.component';

describe('ContactUsCoreFourthSectionComponent', () => {
  let component: ContactUsCoreFourthSectionComponent;
  let fixture: ComponentFixture<ContactUsCoreFourthSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsCoreFourthSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsCoreFourthSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
