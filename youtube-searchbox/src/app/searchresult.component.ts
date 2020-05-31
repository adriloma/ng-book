import { Component, Input } from '@angular/core';
import { SearchResult } from './searchResult.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './searchresult.component.html'
})
export class SearchResultComponent {
  @Input() result: SearchResult;
  constructor() {}
}
