import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-core-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCoreSecondSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
