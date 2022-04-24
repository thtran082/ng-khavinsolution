import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsCoreMainComponent } from './main.component';

describe('ContactUsCoreMainComponent', () => {
  let component: ContactUsCoreMainComponent;
  let fixture: ComponentFixture<ContactUsCoreMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsCoreMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsCoreMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
