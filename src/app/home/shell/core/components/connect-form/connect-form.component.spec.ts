import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCoreConnectFormComponent } from './connect-form.component';

describe('HomeCoreConnectFormComponent', () => {
  let component: HomeCoreConnectFormComponent;
  let fixture: ComponentFixture<HomeCoreConnectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCoreConnectFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCoreConnectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
