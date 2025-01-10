import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {DashboardService} from '../dashboard/dashboard.component';
import { HttpClient } from '@angular/common/http';

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
  dashService = inject(DashboardService);
  http = inject(HttpClient);


  constructor(){
    this.dashService.tokenExpired$.subscribe((Res:boolean)=>{
        if(Res){
          const loggedData = localStorage.getItem("token")
          if(loggedData){
            const loggedUser = JSON.parse(loggedData)
            const Obj={
                "email":loggedUser.email,
                "token":loggedUser.token,
                "refreshToken":loggedUser.refreshToken
            }
            this.http.post("https://app.bestelectronics.com.bd/api/v1/auth/refreshToken",Obj).subscribe((res:any)=>{
              
            })
          }
        }
    })
  }

  logOut() {
    localStorage.removeItem('user')
    this.router.navigateByUrl("login")
  }



}
