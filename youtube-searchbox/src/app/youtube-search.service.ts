import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResult } from './searchResult.model';
import { map } from 'rxjs/operators';

@Injectable()
export class YoutubeSearchService {
  constructor(
    private http: HttpClient,
    @Inject('youtube_api_key') private apiKey: string,
    @Inject('youtube_api_url') private apiUrl: string) {}

    search(query: string): Observable<SearchResult[]> {
      const params: string = [
        `q=${query}`,
        `key=${this.apiKey}`,
        `part=snippet`,
        `type=video`,
        `maxResults=10`
      ].join('&');
      const queryUrl = `${this.apiUrl}?${params}`;

      return this.http.get(queryUrl).pipe(map(response => {
        return response['items'].map(item => {
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
      }));
    }
}
