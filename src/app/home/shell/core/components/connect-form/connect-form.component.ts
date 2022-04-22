import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-core-connect-form',
  templateUrl: './connect-form.component.html',
  styleUrls: ['./connect-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCoreConnectFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
