import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { FantasyService } from 'src/app/services/fantasy.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private _fantasyService: FantasyService) {}
  notlist: News[] = [];
  ngOnInit(): void {
    this.CallApi();
  }

  CallApi():void{
    
    this._fantasyService.GetNews().subscribe((response:News[])=>{  
        
         this.notlist = response;
         console.log("call api is working");
         console.log(this.notlist);
          
         
       });  

      }
      

}
