import { Component, OnInit } from '@angular/core';
import { FantasyFolk } from 'src/app/models/fantasy-folk';
import { FantasyService } from 'src/app/services/fantasy.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  constructor(private _fantasyService:FantasyService) { }

combatPair:FantasyFolk[] = [];

  ngOnInit(): void {
    this.CallDB();
  }

  CallDB():void{
  this._fantasyService.getDeathDuel().subscribe((response:FantasyFolk[])=>{  
    this.combatPair = response;
    console.log("call api is working");
    console.log(this.combatPair);

  });  
}
}