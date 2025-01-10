import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';
import {LayoutComponent} from '../layout/layout.component'; // Add CommonModule

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ NgFor, CommonModule], // Import CommonModule here
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  sideMenuOpen: boolean = false; // Sidebar state

  users: any[] = []; // Store user list

  constructor(private httpClient: HttpClient) {}

  toggleSideMenu(): void {
    this.sideMenuOpen = !this.sideMenuOpen; // Toggle sidebar
  }

  toggleSelectAll(event: any): void {
    this.users.forEach((user) => (user.isSelected = event.target.checked));
  }

  toggleUserSelection(user: any, event: any): void {
    user.isSelected = event.target.checked;
  }

  ngOnInit(): void {
    this.getUsers(); // Fetch users on initialization
  }

  getUsers(): void {
    this.httpClient
      .get('https://app.bestelectronics.com.bd/api/v1/user/allUsers')
      .subscribe(
        (res: any) => {
          if (res && res.users) {
            this.users = res.users;
            console.log('Users fetched successfully:', this.users);
          }
        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      );
  }

  editUser(): void {
    // Edit user functionality here
  }

  removeUser():void{

  }

}

