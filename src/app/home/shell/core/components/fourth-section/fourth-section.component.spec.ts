import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCoreFourthSectionComponent } from './fourth-section.component';

describe('HomeCoreFourthSectionComponent', () => {
  let component: HomeCoreFourthSectionComponent;
  let fixture: ComponentFixture<HomeCoreFourthSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCoreFourthSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCoreFourthSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
