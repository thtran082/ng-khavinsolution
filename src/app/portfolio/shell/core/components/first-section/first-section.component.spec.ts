import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { PortfolioHomeFirstSectionComponent } from './first-section.component';

describe('PortfolioHomeFirstSectionComponent', () => {
  let component: PortfolioHomeFirstSectionComponent;
  let fixture: ComponentFixture<PortfolioHomeFirstSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioHomeFirstSectionComponent ],
      imports: [BrowserAnimationsModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioHomeFirstSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
