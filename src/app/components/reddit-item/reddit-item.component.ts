import { Component, Input } from "@angular/core";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { flush } from "@angular/core/testing";

@Component({
  selector: "app-reddit-item",
  templateUrl: "./reddit-item.component.html",
  styleUrls: ["./reddit-item.component.css"],
})
export class RedditItemComponent {
  @Input() post: String;

  // Post data
  title: string = "This is a test title about something intertsting that i";
  username: string = "testUser";
  subreddit: string = "r/testSubreddit";
  thumbnail: string =
    "https://b.thumbs.redditmedia.com/WxPA-HOO09Ke55Q9GVwyzahaSQSCMX67yyUUbbMmj5s.jpg";
  upVotes: number = 1002;
  hasUpvoted: boolean = false;
  downVotes: number = 45;
  hasDownvoted: boolean = false;
  postContent: string =
    "This is some post content. It doesn't have to be much, but here it is! Awesome, thanks for reading. There's no way something would be so long but.";

  // Post State
  saved: boolean = false;

  // Icons
  upvoteIcon = faArrowUp;
  downvoteIcon = faArrowDown;
  bookmarkOutlineIcon = faBookmark;

  constructor() {
    if (this.postContent.length > 88) {
      this.postContent = this.postContent.slice(0, 88) + "...";
    }
  }

  savePost() {
    this.saved = true;
  }

  unsavePost() {
    this.saved = false;
  }

  switchSavePost() {
    this.saved = !this.saved;
  }

  downvotePost() {
    if (this.hasDownvoted) {
      return;
    } else if (!this.hasDownvoted && !this.hasUpvoted) {
      this.downVotes++;
      this.hasDownvoted = true;
    } else {
      this.hasUpvoted = false;
      this.hasDownvoted = true;
      this.upVotes--;
      this.downVotes++;
    }
  }

  upvotePost() {
    if (this.hasUpvoted) {
      return;
    } else if (!this.hasDownvoted && !this.hasUpvoted) {
      this.upVotes++;
      this.hasUpvoted = true;
    } else {
      this.hasUpvoted = true;
      this.hasDownvoted = false;
      this.upVotes++;
      this.downVotes--;
    }
  }
}
