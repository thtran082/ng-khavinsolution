import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-wave-border',
  templateUrl: './wave-border.component.html',
  styleUrls: ['./wave-border.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaveBorderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
