import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCoreMainComponent } from './main.component';

describe('PortfolioCoreMainComponent', () => {
  let component: PortfolioCoreMainComponent;
  let fixture: ComponentFixture<PortfolioCoreMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioCoreMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCoreMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
