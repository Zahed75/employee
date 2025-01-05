import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {authGuard} from './guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'signIn',
    pathMatch: 'full',
  },
  {
    path: 'signIn',
    component: SignInComponent,

  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent,
        canActivate:[authGuard],
      }
    ]

  }
];
