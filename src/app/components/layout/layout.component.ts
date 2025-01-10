import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';


@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  router = inject(Router);
  // dashService = inject(DashboardComponent)

  // constructor() {
  //   this.dashService.tokenExpired$.subscribe((res: boolean) => {
  //     if(Res){
  //
  //     }
  //   })
  // }

  logOut() {
    localStorage.removeItem('user')
    this.router.navigateByUrl("login")
  }



}
