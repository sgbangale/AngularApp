import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import {
  AccountService,
  RequestService
} from '../../api/services';
import {
  ListControlComponent
} from '../../common/list-control/list-control.component';
import {
  UiBlockService
} from '../ui-block.service';
import {
  Router
} from '@angular/router';
import {
  DetailViewComponent
} from '../../common/detail-view/detail-view.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {

  public detailItem: any;
  @ViewChild(ListControlComponent) listComponent: ListControlComponent;
  @ViewChild(DetailViewComponent) detailviewComponent: DetailViewComponent;
  Items: {};
  ActionItems: any[];

  constructor(private commonService: UiBlockService, private request: RequestService) {
    this.commonService.showBlockUI();
    

  }
  action(data) {
      if(data.ActionCode.indexOf('__edit') != -1)
    {
      this.detailItem = data;  
    }
    else
    {
      this.detailItem=[];
    }
    
  }

  ngAfterViewInit() {
  }

  ngOnInit() {

    this.ActionItems = this.commonService.getMenuItem('user');
    this.listComponent.DisplayColumns = this.commonService.getView('user');
    this.request.request({}, "user__view").subscribe(data => {
      this.Items = data.body.operation_data.request_output_data;
      this.commonService.hideBlockUI();
    });

  }

}