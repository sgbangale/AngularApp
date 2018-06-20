import {
  Component,
  OnInit,
  Input
} from "@angular/core";

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

   data: any[];

  @Input("SelectedItems")
  set SelectedItems(_data: any) {
    if (_data) {
      this.data = _data;
      if (this.data && this.data["SelectedItems"]) {
        this.formField = Object.keys(this.data["SelectedItems"][0]);
        this.formField
          .filter(x => x.indexOf("_id") == -1)
          .filter(x => x.indexOf("__v") == -1)
          .map(item => {
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

    }

  }

  public tabObject: any[] = [];
  public formField: any[]
  public priFields: any[] = [];
  public nonPriFields: any[] = [];
  public objFields: any[] = [];
  public priArrayFields: any[] = [];

  constructor() {}
  ngOnInit() {

  }
}