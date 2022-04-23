import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsCoreSecondSectionComponent } from './second-section.component';

describe('ContactUsCoreSecondSectionComponent', () => {
  let component: ContactUsCoreSecondSectionComponent;
  let fixture: ComponentFixture<ContactUsCoreSecondSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsCoreSecondSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsCoreSecondSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
