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

getGradientBackground(color: string): string {
  const gradientStops = [];
  for (let i = 0; i < this.list.most_added.length; i++) {
    const alpha = 1 - (i / (this.list.most_added.length - 1)); // Calculate alpha based on index
    const colorWithAlpha = `rgba(255, 255, 255, ${alpha})`; // Color with dynamic alpha
    gradientStops.push(`${colorWithAlpha} ${(i + 1) * 10}%`);
  }
  return `linear-gradient(to bottom, ${gradientStops.join(',')})`;
}

}
