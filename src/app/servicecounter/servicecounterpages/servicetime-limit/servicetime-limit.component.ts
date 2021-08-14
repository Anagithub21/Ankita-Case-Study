import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-servicetime-limit',
  templateUrl: './servicetime-limit.component.html',
  styleUrls: ['./servicetime-limit.component.css']
})
export class ServicetimeLimitComponent implements OnInit {
  timerRef: any;
  constructor(private data: DataService) { }
  disablesubmit: boolean = true;
  timerCountdownValue: any = '';
  showHideButtonValue = false;
  noOfTimeStarted: number = 0;
  noOfTimePaused: number = 0;
  pausecycle: any = []
  logEvents: any = []
  pausedarr: any = []

  ngOnInit(): void {
  }


  entertime() {
    console.log(this.timerCountdownValue)
    this.disablesubmit = this.timerCountdownValue ? false : true
  }
  starttimer(): any {
    this.showHideButtonValue = !this.showHideButtonValue;
    this.showHideButtonValue ? this.noOfTimeStarted++ : this.noOfTimePaused++;
    console.log('--', this.noOfTimeStarted, this.noOfTimePaused);
    let data = {
      timervalue: this.timerCountdownValue,
      noOfTimeStarted: this.noOfTimeStarted,
      noOfTimePaused: this.noOfTimePaused,
    }
    this.data.changeMessage(data)
    this.startTimer()
    // this.timerCountdownValue = '';


  }

  resettimer() {
    this.timerCountdownValue = '';
    this.data.changeMessage(0)
    this.noOfTimeStarted = this.noOfTimePaused = 0;
    this.showHideButtonValue = false
    this.disablesubmit = true
    this.logEvents = []
    this.pausedarr = []
    this.data.changelogdata(this.logEvents)
    clearInterval(this.timerRef);

  }
  startTimer() {
    if (this.showHideButtonValue) {
      this.logEvents.push({ "StartedAt": new Date() });
      this.timerRef = setInterval(() => {
        if (this.timerCountdownValue > 0) {
          this.timerCountdownValue--;
          let data = {
            timervalue: this.timerCountdownValue,
            noOfTimeStarted: this.noOfTimeStarted,
            noOfTimePaused: this.noOfTimePaused,
          }
          this.data.changelogdata(this.logEvents)
          this.data.changeMessage(data)
        } else {
          this.resettimer()

        }
      }, 1000)
    } else {
      this.pausedarr.push(this.timerCountdownValue)
      this.logEvents.push({ 'PausedAt': new Date() });
      this.data.changelogdata(this.logEvents)
      clearInterval(this.timerRef);
    }
  }


}
