import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioCoreDetailComponent implements OnInit {
  constructor(protected readonly route: ActivatedRoute) {}
  public id$ = this.route.params.pipe(map(({ id }) => id));

  ngOnInit(): void {}
}
