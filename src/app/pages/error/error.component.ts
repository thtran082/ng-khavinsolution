import {Component, Input, OnInit} from '@angular/core';
import {HttpStatusCode} from "@angular/common/http";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  @Input()
  public status: HttpStatusCode = HttpStatusCode.NotFound;

  constructor() { }

  ngOnInit(): void {
  }

}
