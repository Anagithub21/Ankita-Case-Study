import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { CountdownTimeComponent } from './counterpages/countdown-time/countdown-time.component';
import { TimeLimitComponent } from './counterpages/time-limit/time-limit.component';
import { LogTimeStampComponent } from './counterpages/log-time-stamp/log-time-stamp.component';
import { StartPauseComponent } from './counterpages/start-pause/start-pause.component';
import { FormsModule } from '@angular/forms';
  


@NgModule({
  declarations: [
    CounterComponent,
    CountdownTimeComponent,
    TimeLimitComponent,
    LogTimeStampComponent,
    StartPauseComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    FormsModule
  ]
})
export class CounterModule { }
