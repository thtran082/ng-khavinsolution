import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { PortfolioCoreSecondSectionComponent } from './second-section.component';
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PortfolioCoreSecondSectionComponent', () => {
  let component: PortfolioCoreSecondSectionComponent;
  let fixture: ComponentFixture<PortfolioCoreSecondSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioCoreSecondSectionComponent],
      imports: [BrowserAnimationsModule, RouterTestingModule],
      providers: [RouterModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCoreSecondSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
