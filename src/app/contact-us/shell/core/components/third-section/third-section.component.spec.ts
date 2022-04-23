import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsCoreThirdSectionComponent } from './third-section.component';

describe('ContactUsCoreThirdSectionComponent', () => {
  let component: ContactUsCoreThirdSectionComponent;
  let fixture: ComponentFixture<ContactUsCoreThirdSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsCoreThirdSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsCoreThirdSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
