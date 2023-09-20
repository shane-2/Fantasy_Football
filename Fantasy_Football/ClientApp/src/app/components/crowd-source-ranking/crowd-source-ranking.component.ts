import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FantasyFolk } from 'src/app/models/fantasy-folk';
import { Watchlist } from 'src/app/models/watchlist';
import { FantasyService } from 'src/app/services/fantasy.service';

@Component({
  selector: 'app-crowd-source-ranking',
  templateUrl: './crowd-source-ranking.component.html',
  styleUrls: ['./crowd-source-ranking.component.css']
})
export class CrowdSourceRankingComponent implements OnInit {

  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
 
 
//  ngOnInit(): void {
 
//    this.authService.authState.subscribe((user) => {
//      this.user = user;
//      this.loggedIn = (user != null);
//    });
//  }

  constructor(private _fantasyService:FantasyService, private authService: SocialAuthService) { }
  FF:FantasyFolk[] = [];
  watchlistresult:Watchlist[] = [];
  ngOnInit(): void {
      
      this._fantasyService.getFantasyFolkList().subscribe((response:FantasyFolk[])=>{      
        
        this.FF = response;
        this.authService.authState.subscribe((user) => {
          this.user = user;
          this.loggedIn = (user != null);
        });
      });    
  }

  AddWatchlist(name:string, newPlayer:FantasyFolk):void{
    console.log(name);
    console.log(newPlayer);
    let player:Watchlist = {} as Watchlist;  
    player.playerId = newPlayer.id;
    player.username = name;
    this._fantasyService.AddWatchlistPlayer(player).subscribe((response:Watchlist) =>{
      console.log(response)
      this.watchlistresult.push(response);
    });
  }

  FolkListResult: FantasyFolk [] = [];

 NewFolk(newFolk:FantasyFolk){
  this._fantasyService.AddFolk(newFolk).subscribe((response: FantasyFolk) =>{
   console.log(response);
   this.FolkListResult.push(response);
  })
 }


DeleteFolk(Id:number):void{
  //feedback for user
  let target:number = this.FolkListResult.findIndex(f => f.id ==Id);
  this.FolkListResult.splice(target,1);
  this._fantasyService.DeleteFolk(Id).subscribe((response:FantasyFolk) => {
   console.log(response);
  });

  }



}


