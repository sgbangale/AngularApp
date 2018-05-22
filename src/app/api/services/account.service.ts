
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
  
  // Account_GetResponse(params: any): Observable<HttpResponse<{}>> {
  //   let __params = this.newParams();
  //   let __headers = new HttpHeaders();
  //   let __body: any = null;
  //   // if (params.Authorization != null) __headers = __headers.set('Authorization', params.Authorization.toString());
  //   // if (params.pagingModelPageSize != null) __params = __params.set('pagingModel.pageSize', params.pagingModelPageSize.toString());
  //   // if (params.pagingModelPageNumber != null) __params = __params.set('pagingModel.pageNumber', params.pagingModelPageNumber.toString());
  //   let req = new HttpRequest<any>(
  //     'GET',
  //     this.rootUrl + `/api/Account`,
  //     __body,
  //     {
  //       headers: __headers,
  //       params: __params,
  //       responseType: 'json'
  //     });

  //   return this.http.request<any>(req).pipe(
  //     filter(_r => _r instanceof HttpResponse),
  //     map(_r => {
  //       let _resp = _r as HttpResponse<any>;
  //       let _body: {} = null;

  //       return _resp.clone({body: _body}) as HttpResponse<{}>;
  //     })
  //   );
  // }

  
  // Account_Get(params: any): Observable<{}> {
  //   return this.Account_GetResponse(params).pipe(
  //     map(_r => _r.body)
  //   );
  // }

  login(params: any): Observable<any> {
    var __headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    var __body = {
      EmailAddress: params.username,
      //Password:btoa(params.password),
      Password:(params.password),

    };
   // const formBody = Object.keys(__body).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(__body[key])).join('&');
    let req = new HttpRequest < any > (
      'POST',
      this.rootUrl + `/account/token`,
      __body, {
        headers: __headers

      });
    //   return this.http.request<any>(req)
    //  .map((res:any) =>{
    //    if(res instanceof HttpResponse)
    //    return res;
    //   })
    //  .catch((error:any) =>{
    //    var res = new HttpResponse();
    //    if(error instanceof HttpErrorResponse)
    //    {
    //    return res.clone({
    //    body: error
    //     }) as HttpResponse < any > ; 
    //   }
    //   else {
    //     return res.clone({
    //       body: 'error occured'
    //        }) as HttpResponse < any > ; 
    //   }
      
    //  });

   

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