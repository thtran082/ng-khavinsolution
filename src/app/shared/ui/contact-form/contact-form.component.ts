import { Component, Input, OnInit } from '@angular/core';
import { ContactFormTypeEnum } from '../../data-access/constants/contact-form.enum';

@Component({
  selector: 'app-shared-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class SharedContactFormComponent implements OnInit {
  @Input()
  public type = ContactFormTypeEnum.STANDARD;

  public ContactFormTypeEnum = ContactFormTypeEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
