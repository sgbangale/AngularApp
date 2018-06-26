import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Provider, InjectionToken } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PrimeModule } from './prime/prime.module';
import {DynamicFormsCoreModule} from '@ng-dynamic-forms/core'
import {DynamicFormsPrimeNGUIModule} from '@ng-dynamic-forms/ui-primeng'
import { AppComponent } from './app.component';
import { AccountService } from './api/services';
import { ApiConfiguration } from './api/api-configuration';
import { ApiModule } from './api/api.module';
import {environment } from '../environments/environment'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './shared/ApiInterceptor';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { LoginComponent } from './shared/login/login.component';
import { UserListComponent } from './shared/user-list/user-list.component';
import { SignupComponent } from './shared/signup/signup.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MessageService } from 'primeng/components/common/messageservice';
import { LogoutComponent } from './shared/logout/logout.component';
import { ListControlComponent } from './common/list-control/list-control.component';
import { UiBlockService } from './shared/ui-block.service';
import { RequestComponent } from './shared/request/request.component';
import { EntityComponent } from './shared/entity/entity.component';
import { DetailViewComponent } from './common/detail-view/detail-view.component';
import { EntityViewComponent } from './common/entity-view/entity-view.component';
import { GridControlComponent } from './common/grid-control/grid-control.component';

export function initApiConfiguration(config: ApiConfiguration): Function {
  return () => {
    config.rootUrl = environment.rootUrl;
  };
}
export const INIT_API_CONFIGURATION: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initApiConfiguration,
  deps: [ApiConfiguration],
  multi: true
};


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    UserListComponent,
    SignupComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    ListControlComponent,
    RequestComponent,
    EntityComponent,
    DetailViewComponent,
    EntityViewComponent,
    GridControlComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    //  DynamicFormsCoreModule.forRoot(),
    //  DynamicFormsPrimeNGUIModule,
    AppRoutingModule,
    HttpModule,
    PrimeModule,
    ApiModule

  ],
  providers: [
    INIT_API_CONFIGURATION,
    httpInterceptorProviders,
    MessageService,
    UiBlockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
