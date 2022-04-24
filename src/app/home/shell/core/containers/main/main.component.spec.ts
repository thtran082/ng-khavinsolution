import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCoreMainComponent } from './main.component';

describe('HomeCoreMainComponent', () => {
  let component: HomeCoreMainComponent;
  let fixture: ComponentFixture<HomeCoreMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCoreMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCoreMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
