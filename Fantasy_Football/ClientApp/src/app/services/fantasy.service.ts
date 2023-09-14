import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player, PlayerElement } from '../models/player';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FantasyService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

getAll(): Observable <PlayerElement[]>{
  return this.http.get<PlayerElement[]>(`${this.baseUrl}api/Player`);
}

private Player: PlayerElement = {} as PlayerElement

setPlayer(Player:PlayerElement):void {
  this.Player = Player
}   

getsetPlayer():PlayerElement {
  return this.Player
}

getROSDetails(newPlayer:PlayerElement): Observable <any>{
  return this.http.get<any>(`${this.baseUrl}api/Player?playerId=${newPlayer.playerId}&position=${newPlayer.position}`);
} 



}
