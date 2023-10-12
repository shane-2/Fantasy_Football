import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefRank } from 'src/app/models/def-rank';
import { FantasyService } from 'src/app/services/fantasy.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-def-ranking',
  templateUrl: './def-ranking.component.html',
  styleUrls: ['./def-ranking.component.css'],
})
export class DefRankingComponent implements OnInit {
  constructor(private _fantasyService: FantasyService) {}

  notlist: DefRank = {} as DefRank;

  isDesktop: boolean = false;

  tableHidden: Record<string, boolean> = {
    qb: false,
    rb: false,
    wr: false,
    te: false,
  };

  @HostListener('window:resize', ['$event'])
  checkScreenSize() {
    this.isDesktop = window.innerWidth >= 720;
  }

  toggleTable(table: keyof typeof this.tableHidden): void {
    if (!this.isDesktop) {
      this.tableHidden[table] = !this.tableHidden[table];
    }
  }

  ngOnInit(): void {
    this.CallApi();
    this.checkScreenSize();
  }

  CallApi(): void {
    this._fantasyService.getDefRank().subscribe((response: DefRank) => {
      this.notlist = response;
      console.log('call api is working');
      console.log(this.notlist);
    });
  }
}
