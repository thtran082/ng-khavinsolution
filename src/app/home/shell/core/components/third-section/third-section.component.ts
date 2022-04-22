import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-core-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCoreThirdSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
