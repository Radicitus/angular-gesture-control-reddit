import { Component, Input } from "@angular/core";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { RedditData } from "../../data/Reddit-Data";
import { PostStateService } from "../../services/post-state.service";

@Component({
  selector: "app-reddit-item",
  templateUrl: "./reddit-item.component.html",
  styleUrls: ["./reddit-item.component.css"],
})
export class RedditItemComponent {
  @Input() post: RedditData;
  @Input() postIndex: number;

  // Post data
  postContent: string = "Click here to view post...";

  // Post State
  saved: boolean = false;
  hasUpvoted: boolean = false;
  hasDownvoted: boolean = false;
  currentPost: boolean = false;

  // Icons
  upvoteIcon = faArrowUp;
  downvoteIcon = faArrowDown;
  bookmarkOutlineIcon = faBookmark;

  constructor(private postStateService: PostStateService) {
    if (this.postContent.length > 88) {
      this.postContent = this.postContent.slice(0, 88) + "...";
    }

    // Check Current Post
    this.postStateService.postIndexObservable.subscribe((index) => {
      console.log(index);
      this.currentPost = index === this.postIndex;
    });

    // Toggle Saved
    this.postStateService.setSavedObservable.subscribe((toSave) => {
      if (this.currentPost) {
        if (toSave) {
          this.saved = true;
          this.postStateService.setSaved(false);
        }
      }
    });

    // Toggle Unsaved
    this.postStateService.setUnsavedObservable.subscribe((toUnsave) => {
      if (this.currentPost) {
        if (toUnsave) {
          this.saved = false;
          this.postStateService.setUnsaved(false);
        }
      }
    });

    // Toggle Upvote
    this.postStateService.upVoteObservable.subscribe((state) => {
      if (this.currentPost) {
        if (state) {
          this.upvotePost();
          this.postStateService.setUpVote(false);
        }
      }
    });

    // Toggle Downvote
    this.postStateService.downVoteObservable.subscribe((state) => {
      if (this.currentPost) {
        if (state) {
          this.downvotePost();
          this.postStateService.setDownVote(false);
        }
      }
    });
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
