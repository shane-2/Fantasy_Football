import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent {
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
  isMenuOpen: boolean = false;
  admin: string = 'shanechastain10@gmail.com';
  admin1: string = 'zachbuth@gmail.com';
  admin2: string = 'heathj873@gmail.com';
  admin3: string = 'doug.e.chu@gmail.com';
  adminp: string = this.user.email;
  yesAdmin: boolean = false;

  isAdmin(): void {
    if (this.user.email == this.admin) {
      this.yesAdmin = true;
    }
    if (this.user.email == this.admin1) {
      this.yesAdmin = true;
    }
    if (this.user.email == this.admin2) {
      this.yesAdmin = true;
    }
    if (this.user.email == this.admin3) {
      this.yesAdmin = true;
    }
  }

  constructor(private authService: SocialAuthService) {}

  ngOnInit(): void {
    //subscribe will activate once logged in
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      //consider putting api calls that require user information such as favories in this part right here
      //console.log(this.user);
      this.isAdmin();
    });
  }

  signOut(): void {
    this.authService.signOut();
  }

  toggleMenu() {
    const navigation = document.querySelector('.navigation');
    const navToggle = document.querySelector('.mobile-nav-toggle');

    if (navigation && navToggle) {
      navToggle.addEventListener('click', () => {
        const visibility = navigation.getAttribute('data-visible');

        if (visibility === 'false') {
          navigation.setAttribute('data-visible', 'true');
          navToggle.setAttribute('aria-expanded', 'true');
        } else if (visibility === 'true') {
          navigation.setAttribute('data-visible', 'false');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }
}
