import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { FantasyService } from 'src/app/services/fantasy.service';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private _fantasyService: FantasyService) {}
  notlist: News[] = [];
  currentNews:News [] = [];
  timer = interval(30000);
  subscription:Subscription = {} as Subscription;
  ngOnInit(): void {
    // this.subscription = this.timer.subscribe(x=> this.RandomizeNews());
     this.CallApi();
     setInterval(()=>{
      this.shuffleArray(this.notlist)
     },30000)
  }

  shuffleArray(array: any[]): void{
    for(let i = array.length -1; i>0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array [j]] = [array[j], array[i]];
    }
  };


  CallApi():void{
    
    this._fantasyService.GetNews().subscribe((response:News[])=>{  
        
         this.notlist = response;
         console.log("call api is working");
         console.log(this.notlist);
         this.shuffleArray(this.notlist)
         
       });  

      }
      RandomizeNews():void{
        this.currentNews = [];
        this.currentNews.push(this.notlist[Math.random()*this.notlist.length]);
        this.currentNews.push(this.notlist[Math.random()*this.notlist.length]);
        this.currentNews.push(this.notlist[Math.random()*this.notlist.length]);
        this.currentNews.push(this.notlist[Math.random()*this.notlist.length]);
        this.currentNews.push(this.notlist[Math.random()*this.notlist.length]);
      }
      

}
