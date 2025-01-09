import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterOutlet,

  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isSideMenuExpanded: boolean = false; // Initial state

  toggleSideMenu(): void {
    this.isSideMenuExpanded = !this.isSideMenuExpanded;
  }

  constructor(private httpClient: HttpClient) {

    this.getUsers();

  }

  getUsers(){
    this.httpClient.get("https://app.bestelectronics.com.bd/api/v1/user/allUsers").subscribe((res:any)=>{

    })
  }

}
