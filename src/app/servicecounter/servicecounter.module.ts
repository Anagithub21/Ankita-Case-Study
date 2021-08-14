import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicecounterRoutingModule } from './servicecounter-routing.module';
import { ServicecounterComponent } from './servicecounter.component';
import { ServicecountdownTimeComponent } from './servicecounterpages/servicecountdown-time/servicecountdown-time.component';
import { ServicelogTimeStampComponent } from './servicecounterpages/servicelog-time-stamp/servicelog-time-stamp.component';
import { ServicestartPauseComponent } from './servicecounterpages/servicestart-pause/servicestart-pause.component';
import { ServicetimeLimitComponent } from './servicecounterpages/servicetime-limit/servicetime-limit.component';

import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    ServicecounterComponent,
    ServicecountdownTimeComponent,
    ServicelogTimeStampComponent,
    ServicestartPauseComponent,
    ServicetimeLimitComponent,
  ],
  imports: [
    CommonModule,
    ServicecounterRoutingModule,
    FormsModule
  ],
  providers: [DataService]
})
export class ServicecounterModule { }
