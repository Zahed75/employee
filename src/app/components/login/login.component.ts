import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  loginObj: any = {
    email: '',
    password: ''
  }

  router = inject(Router);

  onLogin() {
    console.log('Login object:', this.loginObj); // Debugging the login object
    if (this.loginObj.email === 'admin@gmail.com' && this.loginObj.password === '1234') {
      this.router.navigateByUrl('layout');
    } else {
      alert('Wrong credentials');
    }
  }

}
