import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCoreSecondSectionComponent } from './second-section.component';

describe('HomeCoreSecondSectionComponent', () => {
  let component: HomeCoreSecondSectionComponent;
  let fixture: ComponentFixture<HomeCoreSecondSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCoreSecondSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCoreSecondSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
