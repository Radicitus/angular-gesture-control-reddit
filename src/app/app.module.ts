import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiComponent } from './components/ui/ui.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HandtrackerComponent } from './components/handtracker/handtracker.component';
import { RedditItemComponent } from './components/reddit-item/reddit-item.component';
import { RedditItemListComponent } from './components/reddit-item-list/reddit-item-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    HomePageComponent,
    HandtrackerComponent,
    RedditItemComponent,
    RedditItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
