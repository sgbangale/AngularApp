import {
  Injectable
} from '@angular/core';
import * as _ from 'lodash';
@Injectable()
export class UiBlockService {

  public blockUI: boolean = false;
  constructor() {}

  showBlockUI() {
    this.blockUI = true;
  }
  hideBlockUI() {
    this.blockUI = false;
  }

  getView(actionCode): any {

    var data = JSON.parse(atob(localStorage.getItem('MenuAccess')));
    var selectedData = _.filter(data, (x) => {
      return x.actionCode === actionCode
    });

    if (selectedData) {
      return selectedData[0].view;
    }
    else
    return [];
  }

  getMenuItem(actionCode): any {

    var data = JSON.parse(atob(localStorage.getItem('MenuAccess')));
    var selectedData = _.filter(data, (x) => {
      return x.actionCode === actionCode
    });

    if (selectedData) {
      return selectedData[0].actionItems;
    }
    else
    return [];
  }
}