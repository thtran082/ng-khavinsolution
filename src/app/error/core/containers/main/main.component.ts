import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-core-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class ErrorCoreMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('im here');
    
  }

}
