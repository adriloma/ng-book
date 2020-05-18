export class Article {
  constructor(public title: string, public link: string, public votes = 0) {}

  public voteUp(): void {
    this.votes += 1;
  }
  public voteDown(): void {
    this.votes -= 1;
  }

  public domain(): string {
    try {
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
