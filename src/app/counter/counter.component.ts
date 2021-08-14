import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  objectKeys = Object.keys;
  countertimerStartFrom: any;
  timerstop: boolean = false;
  interval: any;
  isPause = false;
  logEvents: any = [];
  pausedarr: any = [];
  noOfTimeStarted: any = 0
  noOfTimePaused: any = 0
  constructor(private router: Router) { }

  ngOnInit(): void {

  }


  startTimerEvent($event: any) {
    console.log('herere ' + $event)
    this.countertimerStartFrom = this.isPause ? this.countertimerStartFrom : $event.timervalue;
    this.noOfTimeStarted = $event.noOfTimeStarted || 0
    this.logEvents.push({ "StartedAt": new Date() });
    console.log('log', this.logEvents);
    this.startTimer();

  }

  stopTimerEvent($event: any) {
    this.isPause = true;
    this.logEvents.push({ 'PausedAt': new Date() });
    this.noOfTimePaused = $event || 0
    console.log('stopped value :', this.countertimerStartFrom);
    this.pausedarr.push(this.countertimerStartFrom)
    console.log(this.pausedarr)
    clearInterval(this.interval);
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.countertimerStartFrom > 0) {
        this.countertimerStartFrom--;
      }
      else {
        this.timerstop = true
        this.pausedarr = []
        this.noOfTimeStarted = 0;
        this.noOfTimePaused = 0;
        this.logEvents = []
        this.router.navigate(['counter'])
          .then(() => {
            window.location.reload();
          });
      }
    }, 1000)

  }

  resetTimerEvent() {
    this.isPause = false;
    this.pausedarr = []
    this.countertimerStartFrom = '';
    this.noOfTimeStarted = 0;
    this.noOfTimePaused = 0;
    this.logEvents = []
    clearInterval(this.interval);
  }

}
