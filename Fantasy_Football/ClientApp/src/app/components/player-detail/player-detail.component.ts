import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FantasyService } from 'src/app/services/fantasy.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  constructor(private _fantasyService:FantasyService, private _route:ActivatedRoute) { }

  ngOnInit(): void {
  const routeParams = this._route.snapshot.paramMap;
  let id: number = Number(routeParams.get("id"));
  
  this._singleEventService.GetEventId(id).subscribe((response:Event) =>{
    console.log(response);
this.DisplayEvent = response;
  })
  }
DisplayEvent:Event = {} as Event;

}
