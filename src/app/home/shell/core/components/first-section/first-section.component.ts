import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-core-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCoreFirstSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
