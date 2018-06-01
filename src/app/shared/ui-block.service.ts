import {Observable} from 'rxjs/Observable';
import "rxjs/add/observable/of";
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

  getView(actionCode):Observable<any> {

    var source = Observable.create(observer => {

      var data = JSON.parse(atob(localStorage.getItem('MenuAccess')));
      var selectedData = _.filter(data, (x) => {
        return x.actionCode === actionCode
      });
  
      if (selectedData && actionCode) {
        return Observable.of(selectedData[0].view);
        
      }
      else
      return Observable.of([]);
    });

    return source;
  }
/*
  getMenuItem(actionCode): any {
console.log(actionCode);
    var data = JSON.parse(atob(localStorage.getItem('MenuAccess')));
    var selectedData = _.filter(data, (x) => {
      return x.actionCode === actionCode
    });

    if (selectedData && actionCode) {
      return selectedData[0].actionItems;
    }
    else
    return [];
  }
  */

 getMenuItem(actionCode):Observable<any> {

  var source = Observable.create(observer => {

    var data = JSON.parse(atob(localStorage.getItem('MenuAccess')));
  
    var selectedData = _.filter(data, (x) => {
      return x.actionCode === actionCode
    });
   
    if (selectedData && actionCode) {      
      return Observable.of(selectedData[0].actionItems);
    }
    else
    return Observable.of( []);
  });

  return source;
}
}