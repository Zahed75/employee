import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

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
  apiLoginObj: any = {
    "EmailId": '',
    "Password": ''
  }
  router = inject(Router);
  http = inject(HttpClient)

  onLogin() {
    //HardCode Login
    // if (this.loginObj.email == "admin@gmail.com" && this.loginObj.password == "12345") {
    //   this.router.navigateByUrl("dashboard")
    // } else {
    //   alert("Wrong Credentials");
    // }

    this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.apiLoginObj).subscribe((res: any) => {
      this.router.navigateByUrl("dashboard");
    }, error => {
      alert("Wrong Credentials!")
    })

  }
}
