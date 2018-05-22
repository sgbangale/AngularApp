import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import {
  AccountService
} from '../../api/services';
import { ListControlComponent } from '../../common/list-control/list-control.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit,AfterViewInit {

  @ViewChild(ListControlComponent) listComponent: ListControlComponent;
  Items :{};
  ActionItems:any[];

  constructor(private account: AccountService) {

    
    //this.DisplayColumns=[{field:"Id",header:"Id"},{field:"FirstName",header:"FirstName"}];
    this.ActionItems =[      
      {ActionCode:"ADD",ActionName:"Add New User" ,MultiSelect:true,Icon:'fa-plus'},
      {ActionCode:"EDIT",ActionName:"Edit User",MultiSelect:false,Icon:'fa-edit'},
      {ActionCode:"DELETE",ActionName:"Remove User",MultiSelect:true,Icon:'fa-trash'},
      {ActionCode:"MARK_INACTIVE",ActionName:"Mark User In Active",MultiSelect:true,Icon:'fa-inactive'}
    ];
    this.Items = [{"Id":"2e9593da-f105-42c2-8afd-a107836e53ec","FirstName":"kishor","LastName":"kadam","UserName":"kkadam@gmail.com","Role":"Admin","RoleId":"dc3d6264-4b4b-4523-bc8f-e89e627910f3"},{"Id":"dbddc055-069b-4c13-a0b4-d837b49c7aaa","FirstName":"Suraj A","LastName":"Bangale","UserName":"sgbangale@amail.com","Role":"Candidate","RoleId":"02988a7c-3ed6-496b-8347-c4abb66da175"},{"Id":"76f73cb7-582e-4d55-a9c6-1932650631b5","FirstName":"Suraj B","LastName":"Bangale","UserName":"sgbangale@bmail.com","Role":"Candidate","RoleId":"02988a7c-3ed6-496b-8347-c4abb66da175"},{"Id":"93bd038b-5b92-42b3-9a05-41df5a3992f1","FirstName":"Suraj G","LastName":"Bangale","UserName":"sgbangale@gmail.com","Role":"Admin","RoleId":"dc3d6264-4b4b-4523-bc8f-e89e627910f3"},{"Id":"cf527198-3fe4-49e6-88ea-2870ed6ff9f9","FirstName":"Suraj Z","LastName":"Bangale","UserName":"sgbangale@zmail.com","Role":"Admin","RoleId":"dc3d6264-4b4b-4523-bc8f-e89e627910f3"}];
    
  }
  action(data)
  {
    console.log(data);
  }

  ngAfterViewInit(){
    
  }

  ngOnInit() {
    this.listComponent.DisplayColumns = [{field:"Role",header:"Role"},{field:"FirstName",header:"First Name"},{field:"LastName",header:"Last Name"}];
  }

}