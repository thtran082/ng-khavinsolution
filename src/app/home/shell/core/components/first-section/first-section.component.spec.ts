import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCoreFirstSectionComponent } from './first-section.component';

describe('HomeCoreFirstSectionComponent', () => {
  let component: HomeCoreFirstSectionComponent;
  let fixture: ComponentFixture<HomeCoreFirstSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCoreFirstSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCoreFirstSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
