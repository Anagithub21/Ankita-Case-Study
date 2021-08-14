import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-pause',
  templateUrl: './start-pause.component.html',
  styleUrls: ['./start-pause.component.css']
})
export class StartPauseComponent implements OnInit {
  @Input() logEvents:any
  constructor() {

  }
  ngOnInit() {

  }
}
