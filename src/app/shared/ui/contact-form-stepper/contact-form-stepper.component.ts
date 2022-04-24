import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shared-contact-form-stepper',
  templateUrl: './contact-form-stepper.component.html',
  styleUrls: ['./contact-form-stepper.component.scss'],
})
export class SharedContactFormStepperComponent implements OnInit {
  public currentStep = 0;

  @ViewChild('controls')
  controls!: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit(): void {}

  public onNextBtnClick(): void {
    if (this.currentStep < 2) {
      this.currentStep = this.currentStep + 1;
      this.onMoveStep(this.currentStep);
      return;
    }
    // for submitting form
  }

  public onMoveStepClick(index: number): void {
    if (index === this.currentStep) {
      return;
    }
    this.currentStep = index;
    this.onMoveStep(index);
  }

  public onMoveStep(targetStep: number): void {
    const itemWidth = this.controls.nativeElement.clientWidth;
    const left = `${targetStep < this.currentStep ? '-' : ''}${targetStep}`;
    this.controls.nativeElement.scroll({
      top: 0,
      left: Number(left) * itemWidth,
      behavior: 'smooth',
    });
  }
}
