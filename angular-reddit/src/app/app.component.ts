import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public articles: Article[];

  constructor(){
    this.articles = [];
  }

  public addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';
  }

  public sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
