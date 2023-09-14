import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrls: ['./single-player.component.css']
})
export class SinglePlayerComponent {
@Input() DisplayPlayer:Player={} as Player;

}

// export class SinglePlayerComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
