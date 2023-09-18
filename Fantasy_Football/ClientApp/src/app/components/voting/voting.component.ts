import { Component, OnInit } from '@angular/core';
import { FantasyFolk } from 'src/app/models/fantasy-folk';
import { DEFPosition, Def, IDPPosition, Idp, K, KPosition, QBPosition, Qb, RBPosition, Rb } from 'src/app/models/player-detail';
import { FantasyService } from 'src/app/services/fantasy.service';
import { Player, PlayerElement } from 'src/app/models/player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  constructor(private _fantasyService:FantasyService, private router:Router) { }

combatPair:FantasyFolk[] = [];

  ngOnInit(): void {
    this.CallDB();
    this.compare();
  }
  allPlayers:PlayerElement[] = [];
  p?:PlayerElement = {} as PlayerElement;
  player:Qb | Rb | K | Def | Idp | undefined
bool:boolean =false;

 Quarterback: Qb = {} as Qb
 Flex: Rb = {} as Rb
 Kicker: K = {} as K
 Defense: Def = {} as Def
 IDP: Idp = {} as Idp

  CallDB():void{
  this._fantasyService.getDeathDuel().subscribe((response:FantasyFolk[])=>{  
    this.combatPair = response;
    console.log("call api is working");
    console.log(this.combatPair);

  });  
}


Vote(ff:FantasyFolk[], playerName: string):void{
  this._fantasyService.getVotes(ff,playerName).subscribe((response:FantasyFolk[]) =>{
    this.combatPair = response;
    this.CallDB();
    console.log(this.combatPair)
  })
}

getPlayer(playerId:string):void{
  this._fantasyService.getAll().subscribe((response:PlayerElement[])=>{           
    //saving response in a variable
    this.allPlayers = response;
    this.p = this.allPlayers.find(b => b.playerId == playerId);
    
    if (this.p) {
      this.NavToROS(this.p);
      console.log(this.p);
    }
  });
  
}

NavToROS(p: PlayerElement) {
  this._fantasyService.setPlayer(p);
  console.log(p);
  this.router.navigate(["/rosdetail"]);
  
}


compare(): any {
  return this._fantasyService.getROSDetails(this._fantasyService.getsetPlayer()).subscribe((response:any) =>{
    console.log(response);

    if((response as Qb).position== QBPosition.Qb){
      this.Quarterback = response
      console.log("Is a QB")
    }
    if((response as Rb).position== RBPosition.Rb){
      this.Flex = response
      console.log("Is a Flex")
    }
    if((response as Rb).position== RBPosition.Wr){
      this.Flex = response
      console.log("Is a Flex") 
    }
    if((response as Rb).position== RBPosition.Te){
      this.Flex = response
      console.log("Is a Flex")
    }
    if((response as K).position == KPosition.K){
      this.Kicker = response
      console.log("Is a Kicker")
    }
    if((response as Def).position== DEFPosition.Def){
      this.Defense = response
      console.log("Is a Defense")
    }
    // if((response as Idp).position == IDPPosition.Idp){
    //   this.IDP = response
    //   console.log("Is an IDP")
    // }


  });
}
}