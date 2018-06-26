import {
  Component
} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent {

  fieldTypes :any =[];
  selectedItems: any[];
  formGroup: FormGroup;
  entity_schema_group : FormGroup;
  entity_schema:any[];
  newField :any;
  car :any;
  displayDialog :boolean;
  isNewField : boolean;
  constructor(private fb :FormBuilder) {
    this.createForm() ;
    this.fieldTypes = 
    [
      {label:'String', value:"String"},
      {label : "Number" ,value:"Number"},
      {label : "Mixed" ,value:"Mixed"}
    ]
  }
  save()
  {
    this.formGroup.value.entity_schema_group = this.formGroup.get('entity_schema_group') as FormArray;
    this.formGroup.value.entity_schema_group.push(this.createFieldItem());
  }
  deleteField(index)
  {
    //(this.formGroup.get('entity_fields') as FormArray).splice(index,0);
    console.log(index);
  }
  addField() {
  (this.formGroup.get('entity_fields') as FormArray).push(this.createFieldItem());
}
createFieldItem() :FormGroup
{
  return this.fb.group({
    field_code:['',[Validators.required]],
    field_type:['',[Validators.required]],
    field_required:[true,[Validators.required]]
  });
}
  createForm() {
    this.formGroup = this.fb.group({
      entity_code: ['', [Validators.required]],
      entity_name: ['', [Validators.required]],
      entity_access:['', [Validators.required]],
      entity_active:['', [Validators.required]],
      entity_fields :this.fb.array([this.createFieldItem()])
    });
  }


  submit(){}
  action(data) {

  }

}