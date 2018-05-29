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
    if(_data)
    {
    this.data = _data;
    if (this.data) {
      console.log(this.data);

      this.formField = Object.keys(this.data["SelectedItems"][0]);
      this.formField.map(item => {
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
    }
      console.log(this.priArrayFields);
      console.log(this.nonPriFields);
      console.log(this.objFields);
      console.log(this.priFields);

    }

  }


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