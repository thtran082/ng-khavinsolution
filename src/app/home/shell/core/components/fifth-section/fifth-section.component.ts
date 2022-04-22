import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-core-fifth-section',
  templateUrl: './fifth-section.component.html',
  styleUrls: ['./fifth-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCoreFifthSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
