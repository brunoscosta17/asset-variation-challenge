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
    new Chart(this.element.nativeElement, {
      type: 'line',
      data: {
        datasets: [
          {
            data: [85, 99, 34, 23, 23]
          }
        ]
      }
    });
  }

}
