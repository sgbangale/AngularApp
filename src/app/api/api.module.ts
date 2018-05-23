import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';

import { AccountService } from './services/account.service';
import { RequestService } from './services/request.service';

/**
 * Module that provides instances for all API services
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
   AccountService,
   RequestService
  ],
})
export class ApiModule { }
