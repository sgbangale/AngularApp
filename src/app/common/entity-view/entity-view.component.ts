import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-entity-view',
  templateUrl: './entity-view.component.html',
  styleUrls: ['./entity-view.component.css']
})
export class EntityViewComponent {

  @Input('EntityName') entityName
  set SelectedItems(_data: any) {
    this.entityName = _data;    
  }

  public detailItem: any;
  Items: {};
  ActionItems: any[];
  constructor() {}

  action(data) {
    console.log(data);
    this.detailItem = undefined;
    if (data.ActionCode.indexOf('__edit') != -1) {
      this.detailItem = data;
    }
  }
}