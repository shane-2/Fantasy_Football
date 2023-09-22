import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FantasyFolk } from 'src/app/models/fantasy-folk';

@Component({
  selector: 'app-add-player-form',
  templateUrl: './add-player-form.component.html',
  styleUrls: ['./add-player-form.component.css']
})
export class AddPlayerFormComponent {
  
  f:FantasyFolk = {} as FantasyFolk;
  @Output() FantasyFolkCreated = new EventEmitter<FantasyFolk>();

  CreateFantasyFolk(){
    this.FantasyFolkCreated.emit(this.f);
  }

  

}
