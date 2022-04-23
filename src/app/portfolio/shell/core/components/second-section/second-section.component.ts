import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-core-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioCoreSecondSectionComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  public onMoreClick(): void {
    this.router.navigate(['/portfolio/SPL Success Story'])
  }

}
