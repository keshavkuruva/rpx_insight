import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { DashboardComponent } from "./dashboard.component";
import { SharedModule } from "../shared";
import { ChartsService } from "../shared/chart.service";

const dashboardRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: "",
    component: DashboardComponent
  }
]);

@NgModule({
  imports: [CommonModule, dashboardRouting, SharedModule],
  declarations: [DashboardComponent],
  providers: [ChartsService]
})
export class DashboardModule {}
