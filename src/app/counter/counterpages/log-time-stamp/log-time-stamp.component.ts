import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-time-stamp',
  templateUrl: './log-time-stamp.component.html',
  styleUrls: ['./log-time-stamp.component.css']
})
export class LogTimeStampComponent implements OnInit {
  @Input() noOfTimeStarteds: any;
  @Input() noOfTimePauseds: any;
  constructor() { }

  ngOnInit(): void {
  }

}
