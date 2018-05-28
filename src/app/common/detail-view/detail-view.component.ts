import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  public data : any=[];
  public formGroup :FormGroup;
  constructor(private fb :FormBuilder) {
    this.formGroup=fb.group({
      fname : [''],
      lname:['']

    }

    );
  }
  @Output('ShowGrid') ShowGrid :boolean = false;
  ngOnInit() {
  }

  backClick()
  {
    this.ShowGrid = true;
    console.log(this.data);
  }

}
