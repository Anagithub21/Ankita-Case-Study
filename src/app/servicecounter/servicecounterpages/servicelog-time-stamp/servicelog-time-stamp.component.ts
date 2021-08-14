import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-servicelog-time-stamp',
  templateUrl: './servicelog-time-stamp.component.html',
  styleUrls: ['./servicelog-time-stamp.component.css']
})
export class ServicelogTimeStampComponent implements OnInit,OnDestroy {
  servicedata: any = {}
  subscription: Subscription;
 
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe((data) => {
      this.servicedata = data
    })

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
