import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponets } from './app-routing.module';
import { AppComponent } from './app.component';
import { CPUComponent } from './cpu/cpu.component';
import { GPUComponent } from './gpu/gpu.component';
import { MonitorComponent } from './monitor/monitor.component';
import { PeripheralsComponent } from './peripherals/peripherals.component';
import { RAMComponent } from './ram/ram.component';

@NgModule({
  declarations: [
    AppComponent,
    CPUComponent,
    GPUComponent,
    MonitorComponent,
    PeripheralsComponent,
    RAMComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

