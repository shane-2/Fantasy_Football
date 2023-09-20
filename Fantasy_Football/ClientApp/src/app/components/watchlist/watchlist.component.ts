import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Watchlist } from 'src/app/models/watchlist';
import { FantasyService } from 'src/app/services/fantasy.service';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  watchlist:Watchlist[] = [];
  
  username:string = "";
  constructor(private _fantasyService:FantasyService, private router:Router, private authService: SocialAuthService) { }

  ngOnInit(): void {
    this._fantasyService.GetWatchlist(this.username).subscribe((response:Watchlist[]) =>{
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

}
