import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ContactFormTypeEnum } from 'src/app/shared/data-access/constants/contact-form.enum';

const contents = {
  thirdSection: {
    title: 'workspace',
    subtitle: 'bear-tech story',
    description: `We provide mission-critical IT services that transform global businesses. We deliver excellence for our customers, colleagues and communities around the world. We provide mission-critical IT services that transform global businesses. We deliver excellence for our customers, colleagues and communities around the world.

    We provide mission-critical IT services that transform global businesses. We deliver excellence for our customers, colleagues and communities around the world. We provide mission-critical IT services that transform global businesses. We deliver excellence for our customers, colleagues and communities around the world.`,
  },
  fourthSection: {
    title: 'our culture',
    subtitle: 'bear-tech story',
    description: `We provide mission-critical IT services that transform global businesses. We deliver excellence for our customers, colleagues and communities around the world. We provide mission-critical IT services that transform global businesses. We deliver excellence for our customers, colleagues and communities around the world.

    We provide mission-critical IT services that transform global businesses. We deliver excellence for our customers, colleagues and communities around the world. We provide mission-critical IT services that transform global businesses. We deliver excellence for our customers, colleagues and communities around the world.`,
  },
};

@Component({
  selector: 'app-contact-us-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsCoreMainComponent implements OnInit {
  public ContentsConst = contents;
  public contactFormType: ContactFormTypeEnum = ContactFormTypeEnum.STEPPER;

  constructor() {}

  ngOnInit(): void {}
}
