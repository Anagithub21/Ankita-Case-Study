import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'casestudy-Angular-training';
  opened: any
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor() {

  }
  ngOnInit() {
  }

  clickHandler() {
    this.sidenav.close();
  }
}
