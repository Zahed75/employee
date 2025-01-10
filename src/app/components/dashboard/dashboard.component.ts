import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { NgFor, DatePipe } from '@angular/common'; // Import DatePipe

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, NgFor, DatePipe], // Add DatePipe here
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  sideMenuOpen: boolean = false; // Add this property to track the side menu state

  // Method to toggle the side menu state
  toggleSideMenu(): void {
    this.sideMenuOpen = !this.sideMenuOpen;
  }

  // GetUsers API fetch
  users: any[] = []; // Store the user list

  constructor(private httpClient: HttpClient) {}

  // Toggle select/unselect all users
  toggleSelectAll(event: any): void {
    this.users.forEach(user => user.isSelected = event.target.checked);
  }

  // Toggle individual user selection
  toggleUserSelection(user: any, event: any): void {
    user.isSelected = event.target.checked;
  }

  // Fetch users on component initialization
  ngOnInit(): void {
    this.getUsers(); // Call the API on component initialization
  }

  // API call to fetch users
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

  // Edit user function (currently empty)
  editUser(): void {
    // Edit user functionality here
  }

  // Remove user function (currently empty)
  removeUser(): void {
    // Remove user functionality here
  }
}
