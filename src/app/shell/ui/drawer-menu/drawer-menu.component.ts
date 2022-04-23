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

  ngAfterViewInit(): void {
    // this.overlay.nativeElement.addEventListener('wheel', function (e) {
    //   e.preventDefault();
    //   e.stopPropagation();
    // });
  }
  public onClick(): void {
    console.log('ahihi', this.isOpenedMenu);
  }

  public onOverlayClick(e: any): void {
    e.preventDefault();
    this.isOpenedMenu = false;
  }
}
