import { Injectable } from "@angular/core";
import * as Chart from "assets/default_theme/js/lib/chart-js/Chart.bundle";

declare var jQuery: any;
@Injectable()
export class ChartsService {
  graph1(): void {
    let ctx = document.getElementById("widgetChart1");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        type: "line",
        datasets: [
          {
            data: [65, 59, 84, 84, 51, 55, 40],
            label: "Dataset",
            backgroundColor: "transparent",
            borderColor: "rgba(255,255,255,.55)"
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        responsive: true,
        tooltips: {
          mode: "index",
          titleFontSize: 12,
          titleFontColor: "#000",
          bodyFontColor: "#000",
          backgroundColor: "#fff",
          titleFontFamily: "Montserrat",
          bodyFontFamily: "Montserrat",
          cornerRadius: 3,
          intersect: false
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                color: "transparent",
                zeroLineColor: "transparent"
              },
              ticks: {
                fontSize: 2,
                fontColor: "transparent"
              }
            }
          ],
          yAxes: [
            {
              display: false,
              ticks: {
                display: false
              }
            }
          ]
        },
        title: {
          display: false
        },
        elements: {
          line: {
            borderWidth: 1
          },
          point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      }
    });
  }
  graph2(): void {
    //WidgetChart 2
    var grph2 = document.getElementById("widgetChart2");

    var myChart = new Chart(grph2, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        type: "line",
        datasets: [
          {
            data: [1, 18, 9, 17, 34, 22, 11],
            label: "Dataset",
            backgroundColor: "#63c2de",
            borderColor: "rgba(255,255,255,.55)"
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        responsive: true,
        tooltips: {
          mode: "index",
          titleFontSize: 12,
          titleFontColor: "#000",
          bodyFontColor: "#000",
          backgroundColor: "#fff",
          titleFontFamily: "Montserrat",
          bodyFontFamily: "Montserrat",
          cornerRadius: 3,
          intersect: false
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                color: "transparent",
                zeroLineColor: "transparent"
              },
              ticks: {
                fontSize: 2,
                fontColor: "transparent"
              }
            }
          ],
          yAxes: [
            {
              display: false,
              ticks: {
                display: false
              }
            }
          ]
        },
        title: {
          display: false
        },
        elements: {
          line: {
            tension: 0.00001,
            borderWidth: 1
          },
          point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      }
    });
  }
  graph3(): void {
    //WidgetChart 3
    let ctx3 = document.getElementById("widgetChart3");
    var myChart = new Chart(ctx3, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        type: "line",
        datasets: [
          {
            data: [78, 81, 80, 45, 34, 12, 40],
            label: "Dataset",
            backgroundColor: "rgba(255,255,255,.2)",
            borderColor: "rgba(255,255,255,.55)"
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        responsive: true,

        scales: {
          xAxes: [
            {
              gridLines: {
                color: "transparent",
                zeroLineColor: "transparent"
              },
              ticks: {
                fontSize: 2,
                fontColor: "transparent"
              }
            }
          ],
          yAxes: [
            {
              display: false,
              ticks: {
                display: false
              }
            }
          ]
        },
        title: {
          display: false
        },
        elements: {
          line: {
            borderWidth: 2
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      }
    });
  }
  graph4(): void {
    //WidgetChart 4
    var ctx4 = document.getElementById("widgetChart4");
    var myChart = new Chart(ctx4, {
      type: "bar",
      data: {
        labels: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        datasets: [
          {
            label: "My First dataset",
            data: [
              78,
              81,
              80,
              45,
              34,
              12,
              40,
              75,
              34,
              89,
              32,
              68,
              54,
              72,
              18,
              98
            ],
            borderColor: "rgba(0, 123, 255, 0.9)",
            //borderWidth: "0",
            backgroundColor: "rgba(255,255,255,.3)"
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              display: false,
              categoryPercentage: 1,
              barPercentage: 0.5
            }
          ],
          yAxes: [
            {
              display: false
            }
          ]
        }
      }
    });
  }

  traficChart(): void {
    const brandSuccess = "#4dbd74";
    const brandInfo = "#63c2de";
    const brandDanger = "#f86c6b";

    var elements = 27;
    var data1 = [];
    var data2 = [];
    var data3 = [];

    for (var i = 0; i <= elements; i++) {
      data1.push(this.random(50, 200));
      data2.push(this.random(80, 100));
      data3.push(65);
    }

    //Traffic Chart
    var ctx = document.getElementById("trafficChart");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "M",
          "T",
          "W",
          "T",
          "F",
          "S",
          "S",
          "M",
          "T",
          "W",
          "T",
          "F",
          "S",
          "S",
          "M",
          "T",
          "W",
          "T",
          "F",
          "S",
          "S",
          "M",
          "T",
          "W",
          "T",
          "F",
          "S",
          "S"
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: this.convertHex(brandInfo, 10),
            borderColor: brandInfo,
            pointHoverBackgroundColor: "#fff",
            borderWidth: 2,
            data: data1
          },
          {
            label: "My Second dataset",
            backgroundColor: "transparent",
            borderColor: brandSuccess,
            pointHoverBackgroundColor: "#fff",
            borderWidth: 2,
            data: data2
          },
          {
            label: "My Third dataset",
            backgroundColor: "transparent",
            borderColor: brandDanger,
            pointHoverBackgroundColor: "#fff",
            borderWidth: 1,
            borderDash: [8, 5],
            data: data3
          }
        ]
      },
      options: {
        maintainAspectRatio: true,
        legend: {
          display: false
        },
        responsive: true,
        scales: {
          xAxes: [
            {
              gridLines: {
                drawOnChartArea: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 5,
                stepSize: Math.ceil(250 / 5),
                max: 250
              },
              gridLines: {
                display: true
              }
            }
          ]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          }
        }
      }
    });
  }

  convertHex(hex, opacity) {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const result = "rgba(" + r + "," + g + "," + b + "," + opacity / 100 + ")";
    return result;
  }

  random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  mapChart(sampleData) {
    jQuery("#vmap").vectorMap({
      map: "world_en",
      backgroundColor: null,
      color: "#ffffff",
      hoverOpacity: 0.7,
      selectedColor: "#1de9b6",
      enableZoom: true,
      showTooltip: true,
      values: sampleData,
      scaleColors: ["#1de9b6", "#03a9f5"],
      normalizeFunction: "polynomial"
    });
  }
}
