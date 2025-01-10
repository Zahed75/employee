import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError, of } from 'rxjs';
import { inject } from '@angular/core';
import {DashboardService} from '../components/dashboard/dashboard.component';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const  dashService = inject(DashboardService)

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status == 401) {
        const isContinue = confirm('Your session has expired. Do you want to login again?');
        if (isContinue) {
          dashService.tokenExpired$.next(true);
        }
      }
      return throwError(() => error);
    })
  );
};
