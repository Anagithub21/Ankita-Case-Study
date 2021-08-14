import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-servicestart-pause',
  templateUrl: './servicestart-pause.component.html',
  styleUrls: ['./servicestart-pause.component.css']
})
export class ServicestartPauseComponent implements OnInit {
  logEvents:any=[]
  servicedata: any = {}
  subscription: Subscription;
 
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentlog.subscribe((data) => {
      console.log(data)
      this.logEvents = data
    })

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
