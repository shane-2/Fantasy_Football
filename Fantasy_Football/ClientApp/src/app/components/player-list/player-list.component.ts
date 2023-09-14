import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player, PlayerElement } from 'src/app/models/player';
import { FantasyService } from 'src/app/services/fantasy.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  allPlayers:PlayerElement[] = [];
  constructor(private _fantasyService:FantasyService, private _router:Router) { }

  ngOnInit(): void {
    this.CallApi();

  }
  CallApi():void{
    // this.status="loading";
    this._fantasyService.getAll().subscribe((response:PlayerElement[])=>{      
      
      //saving response in a variable
      this.allPlayers = response;
      console.log("call api is working");
      console.log(this.allPlayers);
      this.allPlayers.splice(10); 
      
      //this line cuts off to ten posts
      // this.status="";
    // }, (err)=>{
      
    //   this.status = "Couldn't find this Subreddit"
    });    
}

NavToROS(p: PlayerElement):void {
  this._fantasyService.setPlayer(p);
  console.log(p)
  this._router.navigate(["/rosdetail"])
}



}
