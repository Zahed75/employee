import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { authGuard } from './guard/auth.guard';
import { UsersComponent } from './components/users/users.component';

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
    path: '',
    component: LayoutComponent, // Use LayoutComponent as the parent container
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      // Add other routes here
    ]
  },
  {
    path: '**',
    redirectTo: 'signIn',
  },
];
