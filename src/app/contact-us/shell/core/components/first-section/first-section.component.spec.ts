import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsCoreFirstSectionComponent } from './first-section.component';

describe('ContactUsCoreFirstSectionComponent', () => {
  let component: ContactUsCoreFirstSectionComponent;
  let fixture: ComponentFixture<ContactUsCoreFirstSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsCoreFirstSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsCoreFirstSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
