import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {
  isSideMenuExpanded: boolean = false; // Initial state

  constructor(private httpClient: HttpClient) {
    this.getUsers();
  }

  toggleSideMenu(): void {
    this.isSideMenuExpanded = !this.isSideMenuExpanded;
  }

  getUsers() {
    this.httpClient.get('https://app.bestelectronics.com.bd/api/v1/user/allUsers').subscribe(
      (res: any) => {
        console.log('Users fetched successfully:', res);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
