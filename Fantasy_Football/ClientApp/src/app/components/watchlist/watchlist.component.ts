import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Watchlist } from 'src/app/models/watchlist';
import { FantasyService } from 'src/app/services/fantasy.service';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { FantasyFolk } from 'src/app/models/fantasy-folk';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  constructor(private _fantasyService:FantasyService, private router:Router, private authService: SocialAuthService) { }
  
  watchlist:Watchlist[] = [];
  fantasyList:FantasyFolk[] = [];

  loggedIn: boolean = false;
  user: SocialUser = {} as SocialUser;

  
  ngOnInit(): void {
  this.authService.authState.subscribe((user) => {
    this.user = user;
    this.loggedIn = (user != null);
	});
   this.DisplayWatchList(this.user);
    this.DisplayFantasyFolk();
  }  


  DisplayWatchList(user:SocialUser):void{
  this._fantasyService.GetWatchlist(user.email).subscribe((response:Watchlist[]) =>{
    console.log(response);
   this.watchlist = response;
  });
}

    DeletePlayer(id:number):void{
      //feedback for user
      let target:number = this.watchlist.findIndex(e => e.id ==id);
      this.watchlist.splice(target,1);
  
      this._fantasyService.DeleteWatchlistPlayer(id).subscribe((response:Watchlist) => {
        console.log(response);
      });
  }


  
  DisplayFantasyFolk(): void {
    this._fantasyService.getFantasyFolkList().subscribe((response:FantasyFolk[]) => {
      console.log(response);
      this.fantasyList = response;
    });
  }

}
