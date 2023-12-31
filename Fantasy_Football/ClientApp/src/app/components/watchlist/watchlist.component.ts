import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Watchlist } from 'src/app/models/watchlist';
import { FantasyService } from 'src/app/services/fantasy.service';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { FantasyFolk } from 'src/app/models/fantasy-folk';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent implements OnInit {
  watchButtonHovered: boolean[] = [];
  deleteButtonHovered: boolean[] = [];

  constructor(
    private _fantasyService: FantasyService,
    private router: Router,
    private authService: SocialAuthService
  ) {}

  watchlist: Watchlist[] = [];
  fantasyList: FantasyFolk[] = [];

  loggedIn: boolean = true;
  user: SocialUser = {} as SocialUser;

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
    this.DisplayWatchList(this.user);

    //button properties
    this.watchButtonHovered = Array(this.watchlist.length).fill(false);
    this.deleteButtonHovered = Array(this.watchlist.length).fill(false);
  }

  DisplayWatchList(user: SocialUser): void {
    this._fantasyService
      .GetWatchlist(user.email)
      .subscribe((response: Watchlist[]) => {
        console.log('display watchlist');
        console.log(response);
        this.watchlist = response;
        this.DisplayFantasyFolk();
      });
  }

  DeletePlayer(id: number): void {
    // let id = parseInt(myString);
    //feedback for user
    let target: number = this.watchlist.findIndex((e) => e.id == id);
    this.watchlist.splice(target, 1);

    this._fantasyService
      .DeleteWatchlistPlayer(id, this.user.email)
      .subscribe((response: Watchlist) => {
        console.log(response);
        this.DisplayWatchList(this.user);
      });
  }

  DisplayFantasyFolk(): void {
    this.fantasyList = [];
    this.watchlist.forEach((p) => {
      this._fantasyService
        .GetFolksInWatchlist(p.playerId)
        .subscribe((response: FantasyFolk) => {
          console.log(response);
          this.fantasyList.push(response);
        });
    });
  }
  getTeamColor(team: string): string {
    return `var(--team-color-${team})`;
  }

  onDeleteButtonMouseEnter(index: number) {
    this.deleteButtonHovered[index] = true;
  }

  onDeleteButtonMouseLeave(index: number) {
    this.deleteButtonHovered[index] = false;
  }
}
