import { Component, OnInit } from "@angular/core";

import { ChartsService } from "../shared/chart.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor(private _chart: ChartsService) {}

  ngOnInit() {
    this._chart.graph1();
    this._chart.graph2();
    this._chart.graph3();
    this._chart.graph4();
    this._chart.traficChart();
  }
}
