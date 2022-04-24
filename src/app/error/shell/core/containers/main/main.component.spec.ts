import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCoreMainComponent } from './main.component';

describe('ErrorCoreMainComponent', () => {
  let component: ErrorCoreMainComponent;
  let fixture: ComponentFixture<ErrorCoreMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorCoreMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCoreMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
