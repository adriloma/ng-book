import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: object;
  public loading: boolean;
  constructor(private http: HttpClient) {
    this.loading = false;
  }

  public makeRequest(): void {
    this.loading = true;
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe(data => {
      this.data = data;
      this.loading = false;
    });
  }
}
