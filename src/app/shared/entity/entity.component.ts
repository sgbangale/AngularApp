import {
  Component
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent {

  formGroup: FormGroup;
  constructor(private fb :FormBuilder) {
    this.createForm() ;
  }


  createForm() {
    this.formGroup = this.fb.group({
      entity_code: ['', [Validators.required]],
      entity_name: ['', [Validators.required]],
      entity_access:['', [Validators.required]],
      entity_active:['', [Validators.required]]
    });
  }


  submit(){}
  action(data) {

  }

}