import { Component } from '@angular/core';
// import { FormGroup } from '@angular/forms';
// import { Accounts } from '../app/formsJsonData/accounts'
// import { DynamicFormControlModel, DynamicFormService } from '@ng-dynamic-forms/core';
// import { AccountService } from './api/services';
  // <div class="ui-g ui-fluid">
  
  // <div class="message ui-g-12 ui-md-12 ui-sm-12"><p-messages></p-messages></div>
  // <div class="ui-g-12 ui-md-12 ui-sm-12 container">
  
  // </div>
  // </div>
@Component({
  selector: 'app-root',
  template: `
  
  <router-outlet></router-outlet>
  
  `,
  styles: []
})
export class AppComponent {

    // formGroup: FormGroup;
    // //formModel: DynamicFormControlModel[] =Accounts.LoginForm;
    // formModel: DynamicFormControlModel[] =Accounts.CreateAccount;

  constructor(/*private formService: DynamicFormService,private account : AccountService*/) {}

// submit()
// {
//     if(this.formGroup.valid)
//     {
        
//     //     this.account.postApiAccountLogin(this.formGroup.value).subscribe(data =>{
//     //     console.log(data);
//     // });

//     this.account.Account_Post(this.formGroup.value).subscribe(data =>{
//         console.log(data);
//     });
//     }
// }
  // ngOnInit() {
  //     this.formGroup = this.formService.createFormGroup(this.formModel);
  // }
}
