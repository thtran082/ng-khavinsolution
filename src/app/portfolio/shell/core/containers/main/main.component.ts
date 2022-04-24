import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ContactFormTypeEnum } from 'src/app/shared/data-access/constants/contact-form.enum';

const contents = {
  first: {
    title: 'Make The Future',
    subtitle: 'fast delivery',
    description: `We provide mission-critical IT services that transform global businesses. We deliver excellence for our customers, colleagues and communities around the world.`,
    image: '/assets/images/png/portfolio_img1.png',
  },
  second: {
    title: 'With Us',
    subtitle: 'Quality',
    description: `We provide mission-critical IT services that transform global businesses. We deliver excellence for our customers, colleagues and communities around the world.`,
    image: '/assets/images/png/portfolio_img2.png',
  },
  third: {
    title: 'We Are Never Stop',
    subtitle: 'Modern Technologies',
    description: `We provide mission-critical IT services that transform global businesses. We deliver excellence for our customers, colleagues and communities around the world.`,
    image: '/assets/images/png/portfolio_img3.png',
  },
};

@Component({
  selector: 'app-portfolio-core-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioCoreMainComponent implements OnInit {
  public readonly ContentConst = contents;
  public contactFormType: ContactFormTypeEnum = ContactFormTypeEnum.STEPPER;

  constructor() {}

  ngOnInit(): void {}
}
