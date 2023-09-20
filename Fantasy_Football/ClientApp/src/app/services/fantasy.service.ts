import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player, PlayerElement } from '../models/player';
import { Observable } from 'rxjs';
import { HotCold } from '../models/hot-cold';
import { DefRank } from '../models/def-rank';
import { FantasyFolk } from '../models/fantasy-folk';
import { Watchlist } from '../models/watchlist';

@Injectable({
  providedIn: 'root'
})
export class FantasyService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

getAll(): Observable <PlayerElement[]>{
  return this.http.get<PlayerElement[]>(`${this.baseUrl}api/Player`);
}

private Player: PlayerElement = {} as PlayerElement

//holds player in the service
setPlayer(Player:PlayerElement):void {
  this.Player = Player
}   

//initializes existence in player-detail.cs
getsetPlayer():PlayerElement {
  return this.Player
}

getROSDetails(playerId: string, position: string): Observable <any>{
  return this.http.get<any>(`${this.baseUrl}api/Player/ROSDetails?playerId=${playerId}&position=${position}`);
} 

getHot(): Observable <HotCold>{
  return this.http.get<HotCold>(`${this.baseUrl}api/Player/HotCold`);
}

getDefRank(): Observable <DefRank>{
  return this.http.get<DefRank>(`${this.baseUrl}api/Player/DefRanking`);
}

getFantasyFolkList(username:string): Observable <FantasyFolk[]>{
  return this.http.get<FantasyFolk[]>(`${this.baseUrl}api/Player/${username}`,);
}

getDeathDuel(): Observable<FantasyFolk[]>{
  return this.http.get<FantasyFolk[]>(`${this.baseUrl}api/Player/MatchPair`);
}

getVotes(FF:FantasyFolk[], playerId:string): Observable<FantasyFolk[]>{
  return this.http.patch<FantasyFolk[]>(`${this.baseUrl}api/Player/${playerId}`,FF);
}

GetWatchlist(username:string):Observable<Watchlist[]>{
  return this.http.get<Watchlist[]>(`${this.baseUrl}api/WatchList/${username}`)
}

AddWatchlistPlayer(newFavorite:Watchlist):Observable<Watchlist>{
  return this.http.post<Watchlist>(`${this.baseUrl}api/WatchList`, newFavorite);
}

DeleteWatchlistPlayer(id:number):Observable<Watchlist>{
  return this.http.delete<Watchlist>(`${this.baseUrl}api/WatchList/${id}`);
}

AddFolk(newFolk:FantasyFolk):Observable<FantasyFolk>{
  return this.http.post<FantasyFolk>(`${this.baseUrl}api/Player`, newFolk);
}

DeleteFolk(Id:number){
  return this.http.delete<FantasyFolk>(`${this.baseUrl}api/Played/${Id}`);
}

}
