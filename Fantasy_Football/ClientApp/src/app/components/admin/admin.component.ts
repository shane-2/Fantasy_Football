import { Component, OnInit } from '@angular/core';
import { FantasyFolk } from 'src/app/models/fantasy-folk';
import { FantasyService } from 'src/app/services/fantasy.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _fantasyService:FantasyService) { }
  allPlayers:FantasyFolk[] =[];

 
  ngOnInit(): void {
  }
  UseVoterFraud():void{
   
      // this.status="loading";
       this._fantasyService.GetVoterFraud().subscribe((response:FantasyFolk[])=>{      
        
      //   //saving response in a variable
        this.allPlayers = response;
      //   console.log("call api is working");
        console.log(this.allPlayers);
      //   this.allPlayers.splice(125); 
  });

}

FolkListResult: FantasyFolk [] = [];

NewFolk(newFolk:FantasyFolk){
  this._fantasyService.AddFolk(newFolk).subscribe((response: FantasyFolk) =>{
   console.log(response);
   this.FolkListResult.push(response);
  })
 }


}
