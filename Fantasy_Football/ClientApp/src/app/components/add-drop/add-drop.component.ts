import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotCold } from 'src/app/models/hot-cold';
import { FantasyService } from 'src/app/services/fantasy.service';

@Component({
  selector: 'app-add-drop',
  templateUrl: './add-drop.component.html',
  styleUrls: ['./add-drop.component.css']
})
export class AddDropComponent implements OnInit {

  constructor(private _fantasyService:FantasyService, private _router:Router) { }

  list: HotCold = {} as HotCold;

  ngOnInit(): void {
    this.CallApi();
  }

  CallApi():void{
    
    this._fantasyService.getHot().subscribe((response:HotCold)=>{  
        
         this.list = response;
         console.log("call api is working");
         console.log(this.list);
         this.list; 
         
       });      

}
getTeamColor(team: string): string {
  return `var(--team-color-${team})`
}

}
