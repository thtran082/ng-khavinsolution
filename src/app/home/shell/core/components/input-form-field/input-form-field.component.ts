import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-input-form-field]',
  templateUrl: './input-form-field.component.html',
  styleUrls: ['./input-form-field.component.scss']
})
export class InputFormFieldComponent implements OnInit {
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
