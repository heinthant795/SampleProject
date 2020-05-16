import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CPUComponent } from './cpu/cpu.component';
import { GPUComponent } from './gpu/gpu.component';
import { RAMComponent } from './ram/ram.component';
import { MonitorComponent } from './monitor/monitor.component';
import { PeripheralsComponent } from './peripherals/peripherals.component';


const routes: Routes = [
  {path: 'CPU', component: CPUComponent},
  {path: 'GPU', component: GPUComponent},
  {path: 'RAM', component: RAMComponent},
  {path: 'Monitor', component: MonitorComponent},
  {path: 'Peripherals', component: PeripheralsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponets=[CPUComponent, GPUComponent, MonitorComponent, PeripheralsComponent, RAMComponent]