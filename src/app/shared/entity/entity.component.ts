
import {ListControlComponent} from '../../common/list-control/list-control.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UiBlockService } from '../ui-block.service';
import { RequestService } from '../../api/services';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {

  @ViewChild(ListControlComponent) listComponent: ListControlComponent;
  Items :{};
  ActionItems:any[];
  constructor(private commonService : UiBlockService,private request : RequestService) {
    this.commonService.showBlockUI();
   }

  ngOnInit() {
    this.ActionItems =this.commonService.getMenuItem('entity');
    this.listComponent.DisplayColumns =this.commonService.getView('entity');
    this.request.request({},"entity__view").subscribe(data=>{
      this.Items = data.body.operation_data.request_output_data;
      this.commonService.hideBlockUI();
    });
  }


  action(data)
  {
    console.log(data);
  }

}
