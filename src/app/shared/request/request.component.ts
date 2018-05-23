import { Component, OnInit, ViewChild } from '@angular/core';
import { ListControlComponent } from '../../common/list-control/list-control.component';
import { MenuItem } from 'primeng/components/common/api';
import { UiBlockService } from '../ui-block.service';
import { RequestService } from '../../api/services';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  @ViewChild(ListControlComponent) listComponent: ListControlComponent;
  Items :{};
  ActionItems:any[];
  constructor(private commonService : UiBlockService,private request : RequestService) {
    this.commonService.showBlockUI();
   }

  ngOnInit() {
    this.ActionItems =this.commonService.getMenuItem('requests');
    this.listComponent.DisplayColumns =this.commonService.getView('requests');
    this.request.request({},"request__view").subscribe(data=>{
      this.Items = data.body.operation_data.request_output_data;
      this.commonService.hideBlockUI();
    });
  }


  action(data)
  {
    console.log(data);
  }

  

}
