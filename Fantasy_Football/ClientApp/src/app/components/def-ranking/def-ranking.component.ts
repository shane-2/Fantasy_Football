import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DefRank } from 'src/app/models/def-rank';
import { FantasyService } from 'src/app/services/fantasy.service';
import { HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-def-ranking',
  templateUrl: './def-ranking.component.html',
  styleUrls: ['./def-ranking.component.css'],
})
export class DefRankingComponent implements OnInit {
  constructor(
    private _fantasyService: FantasyService,
    private elementRef: ElementRef
  ) {}

  notlist: DefRank = {} as DefRank;

  isDesktop: boolean = false;

  tableHidden: Record<string, boolean> = {
    qb: false,
    rb: false,
    wr: false,
    te: false,
  };

  @HostListener('window:resize', ['$event'])
  checkScreenSize(event?: any) {
    this.isDesktop = window.innerWidth >= 720;

    if (this.isDesktop) {
      this.showAllTables();
    } else {
      this.hideAllTables();
    }
  }

  toggleTable(table: keyof typeof this.tableHidden): void {
    if (!this.isDesktop) {
      this.tableHidden[table] = !this.tableHidden[table];
    }
  }

  showAllTables(): void {
    for (const table in this.tableHidden) {
      if (this.tableHidden.hasOwnProperty(table)) {
        this.tableHidden[table] = false;
      }
    }
  }

  hideAllTables(): void {
    for (const table in this.tableHidden) {
      if (this.tableHidden.hasOwnProperty(table)) {
        this.tableHidden[table] = true;
      }
    }
  }

  ngOnInit(): void {
    this.CallApi();
    const resizeObservable = fromEvent(window, 'resize');
    resizeObservable.subscribe(() => {
      this.checkScreenSize();
    });
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
