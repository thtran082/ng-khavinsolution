import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveBorderComponent } from './wave-border.component';

describe('WaveBorderComponent', () => {
  let component: WaveBorderComponent;
  let fixture: ComponentFixture<WaveBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaveBorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaveBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
