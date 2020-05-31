import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { YoutubeSearchService } from './youtube-search.service';
import { SearchBoxComponent } from './searchbox.component';
import { SearchResultComponent } from './searchresult.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: 'youtube_api_key', useValue: environment.youtube_api_key},
    {provide: 'youtube_api_url', useValue: environment.youtube_api_url},
    YoutubeSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
