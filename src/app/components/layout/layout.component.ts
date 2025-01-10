import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DashboardService } from '../dashboard/dashboard.service'; // Correct path

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  router = inject(Router);
  dashService = inject(DashboardService); // Use injected service
  http = inject(HttpClient);

  constructor() {
    this.dashService.tokenExpired$.subscribe((Res: boolean) => {
      if (Res) {
        const loggedData = localStorage.getItem('token');
        if (loggedData) {
          const loggedUser = JSON.parse(localStorage.getItem('user') || '{}');
          const Obj = {
            email: loggedUser.email,
            token: loggedUser.accessToken,
            refreshToken: localStorage.getItem('refreshToken'),
          };
          this.http
            .post(
              'https://app.bestelectronics.com.bd/api/v1/auth/refreshToken',
              Obj
            )
            .subscribe((res: any) => {
              localStorage.setItem('user', JSON.stringify(res.user));
              localStorage.setItem('token', res.user.accessToken);
              localStorage.setItem('refreshToken', res.user.refreshToken);
            });
        }
      }
    });
  }

  logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    this.router.navigateByUrl('login');
  }
}
