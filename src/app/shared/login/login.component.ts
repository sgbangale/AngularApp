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
    private router : Router
  ) {}
  submitLogin() {
    if (this.formGroup.valid) {
      this.account.login(this.formGroup.value).subscribe(data => {
        console.log(data);
      //  this.loginData.emit(data);
        this.router.navigate(['/home']);

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