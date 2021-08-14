import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-servicecountdown-time',
  templateUrl: './servicecountdown-time.component.html',
  styleUrls: ['./servicecountdown-time.component.css']
})
export class ServicecountdownTimeComponent implements OnInit {
  noOfTimeStartedss: any = 0
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
