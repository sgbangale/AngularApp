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

  schemaColumns :any =[];
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
    this.schemaColumns = 
    [
      {field : "code" ,header:"Field Code"},
      {field : "type" ,header:"Field Type"},
      {field : "required" ,header:"Is Required"}
    ]


    
  }
  save()
  {
    this.formGroup.value.entity_schema_group = this.formGroup.get('entity_schema_group') as FormArray;
    this.formGroup.value.entity_schema_group.push(this.createFieldItem());
  }
  showDialogToAdd() {
    this.isNewField = true;    
    this.displayDialog = true;
}
createFieldItem()
{
  return this.fb.group({
    field_code:['',[Validators.required]],
    field_type:['',[Validators.required]],
    field_required:['',[Validators.required]]
  });
}
  createForm() {

    this.entity_schema_group=

    //var schemaGroup =this.fb.array([schema]);

    this.formGroup = this.fb.group({
      entity_code: ['', [Validators.required]],
      entity_name: ['', [Validators.required]],
      entity_access:['', [Validators.required]],
      entity_active:['', [Validators.required]],
      entity_schema_group :this.fb.array([])
    });
  }


  submit(){}
  action(data) {

  }

}