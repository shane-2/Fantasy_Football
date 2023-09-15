import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefRank } from 'src/app/models/def-rank';
import { FantasyService } from 'src/app/services/fantasy.service';

@Component({
  selector: 'app-def-ranking',
  templateUrl: './def-ranking.component.html',
  styleUrls: ['./def-ranking.component.css']
})
export class DefRankingComponent implements OnInit {

  constructor(private _fantasyService:FantasyService) { }

 notlist: DefRank = {} as DefRank;

  ngOnInit(): void {
    this.CallApi();
  }

  CallApi():void{
    
    this._fantasyService.getDefRank().subscribe((response:DefRank)=>{  
        
         this.notlist = response;
         console.log("call api is working");
         console.log(this.notlist);
          
         
       });  

      }
}
