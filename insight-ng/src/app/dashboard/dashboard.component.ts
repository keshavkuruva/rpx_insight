import { Component, OnInit, AfterViewInit } from "@angular/core";

import { ChartsService } from "../shared/chart.service";
//import * as Map from "assets/default_theme/js/lib/vector-map/jquery.vmap";
import { MapSampleData } from "./map.sample.data";
import * as $ from "jquery";

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

  ngOnInit() {
    this._chart.graph1();
    this._chart.graph2();
    this._chart.graph3();
    this._chart.graph4();
    this._chart.traficChart();
    //this.mapChart();
  }
  ngAfterViewInit() {
    window["$"] = window["jQuery"] = $;
    let sample_data = this._sampeldata.SampleData();
    console.log(sample_data);
    $("#vmap").vectorMap({
      map: "world_en",
      backgroundColor: null,
      color: "#ffffff",
      hoverOpacity: 0.7,
      selectedColor: "#1de9b6",
      enableZoom: true,
      showTooltip: true,
      values: sample_data,
      scaleColors: ["#1de9b6", "#03a9f5"],
      normalizeFunction: "polynomial"
    });
  }

  mapChart(): void {}
}
