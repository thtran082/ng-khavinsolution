import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class SharedBreadcrumbComponent implements OnInit {
  public breadcrumbArr: string[] = [];

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.breadcrumbArr = decodeURIComponent(this.router.url).replace('/', '').split('/');
  }
}
