import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefRankingComponent } from './def-ranking.component';

describe('DefRankingComponent', () => {
  let component: DefRankingComponent;
  let fixture: ComponentFixture<DefRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
