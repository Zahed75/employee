import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule], // No HttpClientModule needed
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  apiLoginObj: any = {
    email: '',
    password: ''
  };

  router = inject(Router);
  http = inject(HttpClient);

  onLogin() {
    this.http.post('https://app.bestelectronics.com.bd/api/v1/auth/signInAdmin', this.apiLoginObj).subscribe(
      (res: any) => {
        this.router.navigateByUrl('dashboard');
      },
      (error) => {
        alert('Wrong');
      }
    );
  }
}
