import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
    defaultdata = {
        timervalue: 0,
        noOfTimeStarted: 0,
        noOfTimePaused: 0
    }
    private timervalue = new BehaviorSubject(this.defaultdata);
    currentMessage = this.timervalue.asObservable();
    private logarr=new BehaviorSubject([])
    currentlog=this.logarr.asObservable();
    constructor() { }

    changeMessage(message: any) {
        this.timervalue.next(message)
    }
    changelogdata(data:any){
        this.logarr.next(data)
    }
}