import { Component, OnInit, AfterViewInit } from "@angular/core";

import { ChartsService } from "../shared/chart.service";
import { MapSampleData } from "./map.sample.data";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  providers: [MapSampleData]
})
export class DashboardComponent implements OnInit, AfterViewInit {
  constructor(
    private _chart: ChartsService,
    private _sampeldata: MapSampleData
  ) {}
  sample_data: any;

  ngOnInit() {
    this._chart.graph1();
    this._chart.graph2();
    this._chart.graph3();
    this._chart.graph4();
    this._chart.traficChart();
  }
  //This need to be load after the dom elements are rendered.
  ngAfterViewInit() {
    this.sample_data = this._sampeldata.SampleData();
    this._chart.mapChart(this.sample_data);
  }

}
