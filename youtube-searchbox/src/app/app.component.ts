import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from './searchResult.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: SearchResult[];
  loading: boolean;
  constructor() {
    this.loading = false;
  }

  updateResults(results: SearchResult[]): void {
    this.results = results;
  }
}
