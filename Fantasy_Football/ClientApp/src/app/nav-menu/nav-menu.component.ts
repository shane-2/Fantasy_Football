import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
  admin:string = "shanechastain10@gmail.com"
  admin1:string = "zachbuth@gmail.com"
  admin2:string = "heathj873@gmail.com"
  admin3:string = "dougy@gmail.com"
adminp:string = this.user.email;
yesAdmin:boolean = false;

isAdmin():void{
  if(this.user.email == this.admin){
    this.yesAdmin = true;
  }
  if(this.user.email == this.admin1){
    this.yesAdmin = true;
  }
  if(this.user.email == this.admin2){
    this.yesAdmin = true;
  }
  if(this.user.email == this.admin3){
    this.yesAdmin = true;
  }
}



  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
    //subscribe will activate once logged in
    this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
        //consider putting api calls that require user information such as favories in this part right here
        //console.log(this.user);
        this.isAdmin();
    });
  }

  signOut(): void {
    this.authService.signOut();
    }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
