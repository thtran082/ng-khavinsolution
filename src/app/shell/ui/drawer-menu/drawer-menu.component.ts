import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drawer-menu',
  templateUrl: './drawer-menu.component.html',
  styleUrls: ['./drawer-menu.component.scss'],
})
export class DrawerMenuComponent implements AfterViewInit {
  @ViewChild('overlay') overlay!: ElementRef<HTMLDivElement>;

  public isOpenedMenu = false;

  constructor() {}

  public ngAfterViewInit(): void {}

  public onClick(): void {}

  public onOverlayClick(e: any): void {
    e.preventDefault();
    this.isOpenedMenu = false;
  }
}
