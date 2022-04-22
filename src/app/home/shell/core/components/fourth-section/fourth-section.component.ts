import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-core-fourth-section',
  templateUrl: './fourth-section.component.html',
  styleUrls: ['./fourth-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCoreFourthSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
