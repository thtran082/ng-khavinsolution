import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-core-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioHomeFirstSectionComponent implements OnInit {
  @Input()
  public title = '';
  @Input()
  public subtitle = '';
  @Input()
  public subIcon = '';
  @Input()
  public description = '';
  @Input()
  public portfolioId = '';
  @Input()
  public image = '';
  @Input()
  public reverseLayout = false;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  public onMoreClick(): void {
    this.router.navigate(['/portfolio/' + this.portfolioId]);
  }

}
