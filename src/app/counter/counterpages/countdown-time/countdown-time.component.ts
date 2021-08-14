import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-time',
  templateUrl: './countdown-time.component.html',
  styleUrls: ['./countdown-time.component.css']
})
export class CountdownTimeComponent implements OnInit {
  @Input() noOfTimeStartedss: string;

  constructor() { }

  ngOnInit(): void {
  }

}
