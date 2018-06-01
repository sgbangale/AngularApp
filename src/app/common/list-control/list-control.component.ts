import {
  UiBlockService
} from '../../shared/ui-block.service';
import {
  LazyLoadEvent
} from 'primeng/primeng';
import {
  MessageService
} from 'primeng/components/common/messageservice';
import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  AfterViewInit

} from '@angular/core';
import { } from ''
import {
  generate
} from 'rxjs/observable/generate';
import {
  RequestService
} from '../../api/services';
import * as _ from 'lodash';

@Component({
  selector: 'app-list-control',
  templateUrl: './list-control.component.html',
  styleUrls: ['./list-control.component.css']
})
export class ListControlComponent implements OnInit {

  DisplayColumns: any[];
  @Input('ListData') Items: any[];
  @Input('ActionItems') ActionItems: string[];
  @Input('GenerateColumnAutomatic') GenerateColumn: boolean;
  @Input('EntityName') entityName: string;
  HideList: boolean = false;
  @Output('ListActions') ActionItemsEventEmitter: EventEmitter < any > ;
  selectedItems: any[];
  defaultPageSize: number;
  loading: boolean;
  totalRecords: number;

  constructor(private commonService: UiBlockService, private request: RequestService, private messageService: MessageService) {
    this.ActionItemsEventEmitter = new EventEmitter < any > ();
    this.defaultPageSize = 5;
    this.commonService.showBlockUI();
  }
  loadLazy(event: LazyLoadEvent) {
    this.loading = true;
    this.commonService.showBlockUI();
    this.request.request(event, this.entityName + "__view").subscribe(data => {
      this.totalRecords = data.body.operation_data.request_output_data.count;
      this.Items = data.body.operation_data.request_output_data.data;
      if (this.totalRecords == 0) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Records',
          detail: "No records found."
        });
      }
      if ((this.GenerateColumn || this.GenerateColumn == undefined || this.DisplayColumns.length == 0) && this.Items.length > 0) {
        this.DisplayColumns = Object.keys(this.Items[0])
          .filter(x => x.indexOf("_id") == -1)
          .filter(x => x.indexOf("_v") == -1)
          .map(key => '{ "field" :"' + key + '","header":"' + key.replace("_", " ").replace("_", " ") + '"}')
          .map(jsonRaw => JSON.parse(jsonRaw));
      }
      this.commonService.hideBlockUI();

      this.loading = false;
    });

  }
  disableAction(isMultiSelect, actioncode) {

    if (actioncode.indexOf("__add") != -1) {
      return false;
    } else {
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
    });

  }
  ngOnInit() {
    var data = JSON.parse(atob(localStorage.getItem('MenuAccess')));
    var selectedData = _.filter(data, (x) => {
      return x.actionCode === this.entityName
    });

    if (selectedData && this.entityName) {
      this.ActionItems = selectedData[0].actionItems;
    }

  }

}