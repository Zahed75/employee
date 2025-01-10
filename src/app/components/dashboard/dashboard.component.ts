import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  // side menu toggle
  isSideMenuExpanded: boolean = false; // Initial state

  toggleSideMenu(): void {
    this.isSideMenuExpanded = !this.isSideMenuExpanded;
  }

  // GetUsers API fetch

  users: any[] = []; // Store the user list

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getUsers(); // Call the API on component initialization
  }



  getUsers(): void {
    this.httpClient.get('https://app.bestelectronics.com.bd/api/v1/user/allUsers').subscribe(
      (res: any) => {
        if (res && res.users) {
          this.users = res.users; // Assign users from the API response
          console.log('Users fetched successfully:', this.users);
        }
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
