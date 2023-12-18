import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FantasyFolk } from 'src/app/models/fantasy-folk';
import { PlayerElement } from 'src/app/models/player';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import {
  DEFPosition,
  Def,
  IDPPosition,
  Idp,
  K,
  KPosition,
  PlayerDetail,
  QBPosition,
  Qb,
  RBPosition,
  Rb,
} from 'src/app/models/player-detail';
import { FantasyService } from 'src/app/services/fantasy.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
})
export class PlayerDetailComponent implements OnInit {
  constructor(
    private _fantasyService: FantasyService,
    private authService: SocialAuthService
  ) {}
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;

  admin: string = 'shanechastain10@gmail.com';
  admin1: string = 'zachbuth@gmail.com';
  admin2: string = 'heathj873@gmail.com';
  admin3: string = 'doug.e.chu@gmail.com';
  adminp: string = this.user.email;
  yesAdmin: boolean = false;

  isAdmin(): void {
    if (this.user.email == this.admin) {
      this.yesAdmin = true;
    }
    if (this.user.email == this.admin1) {
      this.yesAdmin = true;
    }
    if (this.user.email == this.admin2) {
      this.yesAdmin = true;
    }
    if (this.user.email == this.admin3) {
      this.yesAdmin = true;
    }
  }

  @Input() combatplayer: FantasyFolk = {} as FantasyFolk;
  @Input() hideOnVotingExpand: boolean = false;

  @Input()
  portraitUrl: string =
    'https://www.fantasynerds.com/images/nfl/players_large/';
  DisplayQB: boolean = false;
  DisplayFlex: boolean = false;
  DisplayKick: boolean = false;
  DisplayDEF: boolean = false;

  setplayer: PlayerElement = this._fantasyService.getsetPlayer();

  divider: number = 3;

  player: Qb | Rb | K | Def | Idp | undefined;

  Quarterback: Qb = {} as Qb;
  Flex: Rb = {} as Rb;
  Kicker: K = {} as K;
  Defense: Def = {} as Def;
  IDP: Idp = {} as Idp;

  GetNumber(x: string): any {
    const parsedFloat = parseFloat(x);
    if (!isNaN(parsedFloat)) {
      return parsedFloat;
    }
  }

  ngOnInit(): void {
    this.yesAdmin = false;
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      this.isAdmin();
    });
    if (this.combatplayer && this.combatplayer.playerId == undefined) {
      console.log('set player?');
      this.DisplayProjections(this.setplayer.playerId, this.setplayer.position);
    } else {
      this.DisplayProjections(
        this.combatplayer.playerId,
        this.combatplayer.position
      );
      console.log(this.combatplayer);
    }
    //this.playerPortraitUrl = `https://www.fantasynerds.com/images/nfl/players_large/${this.playerDetail.playerId}.png`;
  }

  DisplayProjections(playerId: string, position: string): any {
    return this._fantasyService
      .getROSDetails(playerId, position)
      .subscribe((response: any) => {
        console.log(response);

        if ((response as Qb).position == QBPosition.Qb) {
          this.Quarterback = response;
          this.DisplayQB = true;
          console.log('Is a QB');
        }
        if ((response as Rb).position == RBPosition.Rb) {
          this.Flex = response;
          this.DisplayFlex = true;
          console.log('Is a Flex');
        }
        if ((response as Rb).position == RBPosition.Wr) {
          this.Flex = response;
          this.DisplayFlex = true;
          console.log('Is a Flex');
        }
        if ((response as Rb).position == RBPosition.Te) {
          this.Flex = response;
          this.DisplayFlex = true;
          console.log('Is a Flex');
        }
        if ((response as K).position == KPosition.K) {
          this.Kicker = response;
          console.log('Is a Kicker');
        }
        if ((response as Def).position == DEFPosition.Def) {
          this.Defense = response;
          console.log('Is a Defense');
        }
        // if((response as Idp).position == IDPPosition.Idp){
        //   this.IDP = response
        //   console.log("Is an IDP")
        // }
      });
  }
}
