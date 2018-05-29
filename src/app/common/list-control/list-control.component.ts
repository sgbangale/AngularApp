import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import {} from ''
import { generate } from 'rxjs/observable/generate';

@Component({
  selector: 'app-list-control',
  templateUrl: './list-control.component.html',
  styleUrls: ['./list-control.component.css']
})
export class ListControlComponent implements OnInit, AfterViewInit {

  DisplayColumns: any[];
  @Input('ListData') Items: {};
  @Input('ActionItems') ActionItems: string[];
  @Input('GenerateColumnAutomatic') GenerateColumn: boolean;
  HideList :boolean = false;
  @Output('ListActions') ActionItemsEventEmitter: EventEmitter < any > ;
  selectedItems: any[];
  defaultPageSize: number


  constructor() {
    this.ActionItemsEventEmitter = new EventEmitter < any > ();
    this.defaultPageSize = 5;
  }

  disableAction(isMultiSelect, actioncode) {

    if (actioncode.indexOf("__add") != -1) {return false;} else {
      //selected item is zero => disable all action items
      if (this.selectedItems != undefined && this.selectedItems['length'] > 0) {
        //if selected item is one => disable controls whoes multiselect is false
        if (this.selectedItems.length > 1) {
          if (isMultiSelect) {
            return false;
          } else {
            return true;
          }
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
  }

  actionCallback(actionCode) {

    this.ActionItemsEventEmitter.emit({
      SelectedItems: this.selectedItems,
      ActionCode: actionCode
    })
  }

  

  ngAfterViewInit() {

  }
  ngOnInit() {
    if (this.GenerateColumn) {
      this.DisplayColumns = Object.keys(this.Items[0])
        .filter(x => x.indexOf("_id") == -1)
        .map(key => '{ "field" :"' + key + '","header":"' + key.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1") + '"}')
        .map(jsonRaw => JSON.parse(jsonRaw));
    }
  }

}