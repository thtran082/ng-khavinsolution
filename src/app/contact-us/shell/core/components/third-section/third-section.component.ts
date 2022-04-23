import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact-us-core-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsCoreThirdSectionComponent implements OnInit {
  @Input()
  public title = '';
  @Input()
  public subtitle = '';
  @Input()
  public description = '';
  @Input()
  public image = '/assets/images/png/restaurant.png';

  constructor() { }

  ngOnInit(): void {
  }

}
