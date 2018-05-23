
/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse,HttpErrorResponse,
  HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/catch'
// import { _throw } from 'rxjs/observable/throw';
import { filter } from 'rxjs/operators/filter';
@Injectable()
class AccountService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }
  login(params: any): Observable<any> {
    var __headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    var __body = {
      EmailAddress: params.username,
      Password:(params.password),

    };
    let req = new HttpRequest < any > (
      'POST',
      this.rootUrl + `/account/token`,
      __body, {
        headers: __headers

      });
      
    return this.http.request < any > (req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse < any > ;
        let _body = _resp.body;
   
        if (_resp.ok) {
          localStorage.clear();
          Object.keys(_body).map(key => localStorage.setItem(key, _body[key]));
        } else {
          localStorage.clear();
        }
        return _resp.clone({
          body: _body
        }) as HttpResponse < any > ;
      })
    );
  }
}


export { AccountService }