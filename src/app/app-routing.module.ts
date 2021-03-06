import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  DashboardComponent
} from './shared/dashboard/dashboard.component';
import {
  LoginComponent
} from './shared/login/login.component';
import {
  SignupComponent
} from './shared/signup/signup.component';
import {
  UserListComponent
} from './shared/user-list/user-list.component';
import {
  AuthGuard
} from './shared/auth-guard.guard';
import { LogoutComponent } from './shared/logout/logout.component';
import { RequestComponent } from './shared/request/request.component';
import { EntityComponent } from './shared/entity/entity.component';
import { DetailViewComponent } from './common/detail-view/detail-view.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    pathMatch : 'full'
  },

  {
    path: 'details',
    component: DetailViewComponent,
    canActivate: [AuthGuard],
    pathMatch : 'full'
  },
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [AuthGuard],    
    children: [
      {
        path: 'requests',
        component: RequestComponent
      },
      {
        path: 'users',
        component: UserListComponent
      },
      {
        path: 'entities',
        component:EntityComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'users',
    component: UserListComponent,
  },
  {
    path: 'createuser',
    component: SignupComponent,
  }



];

@NgModule({
  providers: [AuthGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}