import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import {
  AccountService, RequestService
} from '../../api/services';
import { ListControlComponent } from '../../common/list-control/list-control.component';
import { UiBlockService } from '../ui-block.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit,AfterViewInit {

  @ViewChild(ListControlComponent) listComponent: ListControlComponent;
  Items :{};
  ActionItems:any[];

  constructor(private account: AccountService,private commonService :UiBlockService,private request :RequestService) {
    this.commonService.showBlockUI();
    
  }
  action(data)
  {
    console.log(data);
  }

  ngAfterViewInit(){
    
  }

  ngOnInit() {
   
    this.ActionItems =this.commonService.getMenuItem('user');
    this.listComponent.DisplayColumns =this.commonService.getView('user');
    this.request.request({},"user__view").subscribe(data=>{
      this.Items = data.body.operation_data.request_output_data;
      this.commonService.hideBlockUI();
    });
    
  }

}