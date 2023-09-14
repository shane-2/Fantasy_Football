import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerElement } from 'src/app/models/player';
import { DEFPosition, Def, IDPPosition, Idp, K, KPosition, QBPosition, Qb, RBPosition, Rb } from 'src/app/models/player-detail';
import { FantasyService } from 'src/app/services/fantasy.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  constructor(private _fantasyService:FantasyService) { }
  
 player:Qb | Rb | K | Def | Idp | undefined


 Quarterback: Qb = {} as Qb
 Flex: Rb = {} as Rb
 Kicker: K = {} as K
 Defense: Def = {} as Def
 IDP: Idp = {} as Idp

  ngOnInit(): void {
  this.DisplayProjections();
  }

DisplayProjections(): any {
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
