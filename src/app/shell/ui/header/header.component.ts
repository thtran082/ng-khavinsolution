import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public isToggleMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleMobileMenu(): void {
    this.isToggleMenu = !this.isToggleMenu;
  }

}
