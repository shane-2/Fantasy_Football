import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FantasyService } from 'src/app/services/fantasy.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
