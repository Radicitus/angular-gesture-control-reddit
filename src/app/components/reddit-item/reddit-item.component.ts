import { Component, Input } from "@angular/core";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { RedditData } from "../../data/Reddit-Data";

@Component({
  selector: "app-reddit-item",
  templateUrl: "./reddit-item.component.html",
  styleUrls: ["./reddit-item.component.css"],
})
export class RedditItemComponent {
  @Input() post: RedditData;

  // Post data
  postContent: string =
    "This is some post content. It doesn't have to be much, but here it is! Awesome, thanks for reading. There's no way something would be so long but.";

  // Post State
  saved: boolean = false;
  hasUpvoted: boolean = false;
  hasDownvoted: boolean = false;

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
      this.post.downvotes++;
      this.hasDownvoted = true;
    } else {
      this.hasUpvoted = false;
      this.hasDownvoted = true;
      this.post.upvotes--;
      this.post.downvotes++;
    }
  }

  upvotePost() {
    if (this.hasUpvoted) {
      return;
    } else if (!this.hasDownvoted && !this.hasUpvoted) {
      this.post.upvotes++;
      this.hasUpvoted = true;
    } else {
      this.hasUpvoted = true;
      this.hasDownvoted = false;
      this.post.upvotes++;
      this.post.downvotes--;
    }
  }
}
