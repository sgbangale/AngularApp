import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-control',
  templateUrl: './grid-control.component.html',
  styleUrls: ['./grid-control.component.css']
})
export class GridControlComponent implements OnInit {

  constructor() { }
  @Input('ListData') Items: any[];
  
  ngOnInit() {
  }

}
