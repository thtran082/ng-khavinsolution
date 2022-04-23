import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCoreThirdSectionComponent } from './third-section.component';

describe('HomeCoreThirdSectionComponent', () => {
  let component: HomeCoreThirdSectionComponent;
  let fixture: ComponentFixture<HomeCoreThirdSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCoreThirdSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCoreThirdSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
