import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

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
        if (res && res.user) {
          // Store the entire user object in localStorage
          localStorage.setItem('user', JSON.stringify(res.user));
          // Store the accessToken and refreshToken separately (optional)
          localStorage.setItem('token', res.user.accessToken);
          localStorage.setItem('refreshToken', res.user.refreshToken);

          // Navigate to the dashboard
          this.router.navigateByUrl('dashboard');
        } else {
          alert('Invalid response data');
        }
      },
      (error) => {
        alert('Wrong credentials');
      }
    );
  }

}
