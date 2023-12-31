import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { AddDropComponent } from './components/add-drop/add-drop.component';
import { DefRankingComponent } from './components/def-ranking/def-ranking.component';
import { VotingComponent } from './components/voting/voting.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { CrowdSourceRankingComponent } from './components/crowd-source-ranking/crowd-source-ranking.component';
import { AdminComponent } from './components/admin/admin.component';
import { NewsComponent } from './components/news/news.component';
import { AddPlayerFormComponent } from './components/add-player-form/add-player-form.component';
import { FAQComponent } from './components/faq/faq.component';
import { EmptyComponent } from './components/empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PlayerListComponent,
    PlayerDetailComponent,    
    AddDropComponent,
    DefRankingComponent,
    VotingComponent,
    WatchlistComponent,
    CrowdSourceRankingComponent,
    AdminComponent,
    NewsComponent,
    AddPlayerFormComponent,
    FAQComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'player', component: PlayerListComponent},
      { path: 'rosdetail', component: PlayerDetailComponent},
      { path: 'adddrop', component: AddDropComponent},
      { path: 'defrank', component: DefRankingComponent},
      { path: 'top100', component: PlayerListComponent},
      { path: 'crowdsource', component: CrowdSourceRankingComponent},
      { path: 'watchlist', component: WatchlistComponent},
      { path: 'admin', component: AdminComponent},
      { path: 'FAQ', component: FAQComponent}


    ])
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '652084145802-65hq0etlehatl0t0eunjf8u3ebrqrfp6'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
