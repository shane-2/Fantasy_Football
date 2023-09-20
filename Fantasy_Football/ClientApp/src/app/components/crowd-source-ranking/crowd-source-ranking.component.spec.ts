import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdSourceRankingComponent } from './crowd-source-ranking.component';

describe('CrowdSourceRankingComponent', () => {
  let component: CrowdSourceRankingComponent;
  let fixture: ComponentFixture<CrowdSourceRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrowdSourceRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrowdSourceRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
