import {
  Component,
  OnInit,
  Output,
  Input
} from '@angular/core';
import {
  FormGroup,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  private data: any[];

  @Input("SelectedItems")
  set SelectedItems(_data: any) {
    console.log('prev value: ', this.data);
    console.log('got name: ', _data);
    if (_data) {
      this.data = _data;
      if (this.data) {
        console.log(this.data);

        this.formField = Object.keys(this.data["SelectedItems"][0]);
        this.formField
          .filter(x => x.indexOf("_id") == -1)
          .filter(x => x.indexOf("__v") == -1)
          .map(item => {
            // console.log(item + '-'+Object.prototype.toString.call(this.data[0]["SelectedItems"][0][item]));
            var jsontype = Object.prototype.toString.call(this.data["SelectedItems"][0][item]);

            switch (jsontype) {
              case '[object Array]':
                {

                  if (Object.prototype.toString.call(this.data["SelectedItems"][0][item][0]) !== '[object Array]' && Object.prototype.toString.call(this.data["SelectedItems"][0][item][0]) !== '[object Object]')
                    this.priArrayFields.push(item);
                  else
                    this.nonPriFields.push(item);
                  break;
                }

              case '[object Object]':
                {
                  this.objFields.push(item);
                  break;
                }
              default:
                {
                  this.priFields.push(item);
                  break;
                }
            }
          });


        //two column design
        var rowCount = Math.ceil(this.priFields.length / 2);

        for (let index = 0; index < rowCount; index++) {
          var dataRow: any = {};
          var col1: any = {};
          var i = 1;
          this.priFields.forEach(element => {
            col1.header = element;
            col1.data = this.data["SelectedItems"][0][element];
            if (i == 1) {
              dataRow.col1 = col1;
              i++;
            } else {
              dataRow.col2 = col1;
              i = 1;
              return;
            }
            col1 = {};
          });


          this.tabObject.push(dataRow);
          dataRow = {};
        }
        console.log(this.tabObject);
      }

    }

  }

  public tabObject: any[] = [];
  public formField: any[]
  public priFields: any[] = [];
  public nonPriFields: any[] = [];
  public objFields: any[] = [];
  public priArrayFields: any[] = [];

  constructor(private fb: FormBuilder) {}
  ngOnInit() {

  }

  backClick() {

    console.log(this.data);
  }

}