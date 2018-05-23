import {
  Component,
  OnInit,
  Input,
  EventEmitter
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  Accounts
} from '../../formsJsonData/accounts';
import {
  AccountService
} from '../../api/services';
import {
  Password
} from 'primeng/primeng';
import {
  MessageService
} from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';
import { UiBlockService } from '../ui-block.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginData: EventEmitter < any >= new EventEmitter < any > ();

  formGroup: FormGroup;
  constructor(
    private account: AccountService, 
    private fb: FormBuilder, 
    private messageService: MessageService,
    private router : Router,
    private uiService : UiBlockService
  ) {}
  submitLogin() {
    if (this.formGroup.valid) {      
      this.uiService.showBlockUI();
      
      this.account.login(this.formGroup.value).subscribe(data => {
        this.uiService.hideBlockUI();
        if(data.body.success == false)
        {
          localStorage.clear();
          this.messageService.add({severity:'error', summary:'Account Details', detail:data.body.message});
        }
        else
        {
          //  this.loginData.emit(data);
          this.router.navigate(['/home']);
        }
      });
    }
  }

  createForm() {
    this.formGroup = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });


  }
  ngOnInit() {
    this.createForm();
  }

}