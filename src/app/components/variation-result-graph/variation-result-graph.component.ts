import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-variation-result-graph',
  templateUrl: './variation-result-graph.component.html',
  styleUrls: ['./variation-result-graph.component.scss']
})
export class VariationResultGraphComponent implements OnInit {

  @Input() data: any = [];

  @ViewChild("canvas", { static: true }) element!: ElementRef;

  constructor() {
    Chart.register(...registerables)
  }

  ngOnInit(): void {
    console.log(this.data);
    const indc = this.data.chart.result[0].indicators.quote[0].open;
    const indc2 = indc.slice(-30);
    console.log('INDIC2', indc2)
    const data = this.data.chart.result[0];
    const prices = data.indicators.quote[0].close;
    const timestamps = data.timestamp;
    console.log(data, prices, timestamps);
    new Chart(this.element.nativeElement, {
      type: 'line',
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
        datasets: [
          {
            data: indc2
          }
        ]
      }
    });
  }

}
