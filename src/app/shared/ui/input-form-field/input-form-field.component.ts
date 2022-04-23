import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-shared-input-form-field]',
  templateUrl: './input-form-field.component.html',
  styleUrls: ['./input-form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedInputFormFieldComponent implements OnInit {
  @Input()
  public label?: string = '';
  @Input()
  public type?: string = 'text';
  @Input()
  public placeholder?: string = '';
  @Input()
  public required?: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
