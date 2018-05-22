import { Injectable } from "@angular/core";
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Apply the headers
    req = req.clone({
      // setHeaders: {
      //   'Authorization':  localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token')
      // }
    });
    return next.handle(req);
  }
}