import { Component, Input } from "@angular/core";

@Component({
  selector: "app-reddit-item",
  templateUrl: "./reddit-item.component.html",
  styleUrls: ["./reddit-item.component.css"],
})
export class RedditItemComponent {
  @Input() post: String;

  // Post data
  title: string = "This is a test title";
  username: string = "testUser";
  subreddit: string = "testSubreddit";
  thumbnail: string =
    "https://b.thumbs.redditmedia.com/WxPA-HOO09Ke55Q9GVwyzahaSQSCMX67yyUUbbMmj5s.jpg";
  upVotes: number = 1002;
  downVotes: number = 45;
  postContent: string =
    "This is some post content. It doesn't have to be much, but here it is! Awesome, thanks for reading.";

  constructor() {}
}
