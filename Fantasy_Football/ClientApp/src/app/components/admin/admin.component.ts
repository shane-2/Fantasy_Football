import { Component, OnInit } from '@angular/core';
import { FantasyFolk } from 'src/app/models/fantasy-folk';
import { FantasyService } from 'src/app/services/fantasy.service';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _fantasyService:FantasyService, private authService: SocialAuthService) { }
  allPlayers:FantasyFolk[] =[];

 
  ngOnInit(): void {
    this.yesAdmin= false;
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.isAdmin();
    });
  }
  UseVoterFraud():void{
   
       this._fantasyService.GetVoterFraud().subscribe((response:FantasyFolk[])=>{      
        this.allPlayers = response;
        console.log(this.allPlayers);
  });

}

FolkListResult: FantasyFolk [] = [];

NewFolk(newFolk:FantasyFolk){
  this._fantasyService.AddFolk(newFolk).subscribe((response: FantasyFolk) =>{
   console.log(response);
   this.FolkListResult.push(response);
  })
 }

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
}
