import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-limit',
  templateUrl: './time-limit.component.html',
  styleUrls: ['./time-limit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TimeLimitComponent implements OnInit {

  constructor() {
  }
  disablesubmit: boolean = true;
  timerCountdownValue: any = '';
  showHideButtonValue = false;
  noOfTimeStarted: number = 0;
  noOfTimePaused: number = 0;

  @Output() timerCountdownValueEvent = new EventEmitter<any>();
  @Output() timerCountdownStopEvent = new EventEmitter<any>();
  @Output() timerCountdownResetEvent = new EventEmitter<any>();

  @Output() noOfTimesStartAndPause = new EventEmitter<object>();

  @Input() stopvalue: boolean=false
  @Input() pausecycle: any = []


  ngOnInit(): void {
  }
  
  entertime() {
    console.log(this.timerCountdownValue)
    this.disablesubmit = this.timerCountdownValue ? false : true
  }
  component2Emitter():any {
    this.showHideButtonValue = !this.showHideButtonValue;
    this.showHideButtonValue ? this.noOfTimeStarted++ : this.noOfTimePaused++;
    console.log('--', this.noOfTimeStarted, this.noOfTimePaused);
    let data={
      timervalue:this.timerCountdownValue,
      noOfTimeStarted:this.noOfTimeStarted,
      noOfTimePaused:this.noOfTimePaused
    }
    this.showHideButtonValue ? this.timerCountdownValueEvent.emit(data) : this.timerCountdownStopEvent.emit(this.noOfTimePaused);
    this.timerCountdownValue = '';
  }

  component2EmitterReset() {
    this.timerCountdownValue = '';
    this.noOfTimeStarted = this.noOfTimePaused = 0;
    this.showHideButtonValue = false
    this.disablesubmit = true
    this.timerCountdownResetEvent.emit();
  }
  
}
