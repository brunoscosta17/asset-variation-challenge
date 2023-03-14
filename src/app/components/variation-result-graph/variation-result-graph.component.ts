import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-variation-result-graph',
  templateUrl: './variation-result-graph.component.html',
  styleUrls: ['./variation-result-graph.component.scss']
})
export class VariationResultGraphComponent implements OnInit {

  @Input() data: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
