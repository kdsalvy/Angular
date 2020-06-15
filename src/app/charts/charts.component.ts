import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  public options: any = {
    chart: {
      type: 'line',
      height: 700
    },
    title: {
      text: 'Sample Line Plot'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter: function() {
        return 'x: ' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) +
          '  y: ' + this.y.toFixed(2) + 
          '  data: ' + this.point.options.extraData;
      }
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter: function() {
          return Highcharts.dateFormat('%e %b %y', this.value);
        }
      }
    },
    series: [
      {
        name: 'Normal',
        turboThreshold: 500000,
        data: [
          {'x': new Date('2018-01-25 18:38:31').getTime(), 'y': 2, 'extraData': 1},
          {'x': new Date('2018-01-26 20:38:31').getTime(), 'y': 5, 'extraData': 2},
          {'x': new Date('2018-01-27 15:38:31').getTime(), 'y': 3, 'extraData': 3},
          {'x': new Date('2018-01-28 17:38:31').getTime(), 'y': 2, 'extraData': 4},
          {'x': new Date('2018-01-29 14:38:31').getTime(), 'y': 3, 'extraData': 5},
        ],
        extraData: [
          1,2,3,4,5
        ]
      },
      {
        name: 'Abnormal',
        turboThreshold: 500000,
        data: [
        {'x': new Date('2018-01-25 18:38:31').getTime(), 'y': 6, 'extraData': 1},
        {'x': new Date('2018-01-26 18:38:31').getTime(), 'y': 5, 'extraData': 2},
        {'x': new Date('2018-02-01 18:38:31').getTime(), 'y': 7, 'extraData': 3}
        ]
      }
    ]
  }
  constructor() { }

  ngOnInit(){
    Highcharts.chart('container', this.options);
  }
}
