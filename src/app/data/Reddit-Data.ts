export class RedditData {
  username: string;
  subreddit: string;
  video: boolean;
  thumbnail: string;
  upvotes: number;
  downvotes: number;
  title: string;
  ratio: number;

  constructor(objectModel: {}) {
    // @ts-ignore
    this.username = objectModel["data"]["author"];
    // @ts-ignore
    this.subreddit = objectModel["data"]["subreddit_name_prefixed"];
    // @ts-ignore
    this.thumbnail = objectModel["data"]["thumbnail"];
    if (this.thumbnail === "default") {
      this.thumbnail =
        "https://b.thumbs.redditmedia.com/WxPA-HOO09Ke55Q9GVwyzahaSQSCMX67yyUUbbMmj5s.jpg";
    }
    // @ts-ignore
    this.ratio = objectModel["data"]["upvote_ratio"];
    // @ts-ignore
    this.upvotes = objectModel["data"]["ups"];
    // @ts-ignore
    let downs = (1 - this.ratio) * this.upvotes;
    this.downvotes = Math.round(downs);
    // @ts-ignore
    this.title = objectModel["data"]["title"];
    if (this.title.length > 88) {
      this.title = this.title.slice(0, 105) + "...";
    }
  }
}
