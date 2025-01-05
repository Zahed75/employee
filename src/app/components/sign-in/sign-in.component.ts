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
        if (res && res.user && res.user.userId) {
          localStorage.setItem('user', res.user.userId);
          localStorage.setItem('token',res.user.token);
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
