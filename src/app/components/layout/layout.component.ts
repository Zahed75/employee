import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  router = inject(Router)

  logOut() {
    localStorage.removeItem('user')
    this.router.navigateByUrl("login")
  }


}
