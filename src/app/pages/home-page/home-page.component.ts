import { Component, OnInit } from "@angular/core";
import { PredictionEvent } from "../../prediction-event";
import { RedditService } from "../../services/reddit.service";
import { RedditData } from "../../data/Reddit-Data";
import { PostStateService } from "../../services/post-state.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  gesture: String = "";
  redditPosts: RedditData[];
  postIndex: number = -1;

  constructor(
    private redditService: RedditService,
    public postStateService: PostStateService
  ) {
    this.redditService.getRedditPosts().then((data) => {
      console.log(data);
      this.redditPosts = data;
    });
  }

  ngOnInit(): void {}

  prediction(event: PredictionEvent) {
    this.gesture = event.getPrediction();
    if (this.gesture === "Hand Pointing") {
      this.updatePostIndex(this.postIndex + 1);
    }
    if (this.gesture === "One Open, One Pointing") {
      this.updatePostIndex(this.postIndex - 1);
    }
    if (this.gesture === "Open Hand") {
      this.setUpvote();
    }
    if (this.gesture === "Closed Hand") {
      this.setDownvote();
    }
    if (this.gesture === "One Open, One Closed") {
      this.setSavePost();
    }
    if (this.gesture === "Two Closed Hands") {
      this.setUnsavePost();
    }
    if (this.gesture === "Two Open Hands") {
      this.refreshPosts();
    }
  }

  updatePostIndex(index: number) {
    if (index > this.redditPosts.length) {
      this.postIndex = this.redditPosts.length - 1;
      this.postStateService.changePostIndex(this.postIndex);
      return;
    }

    if (index < 0) {
      this.postIndex = 0;
      this.postStateService.changePostIndex(this.postIndex);
      return;
    }

    this.postIndex = index;
    this.postStateService.changePostIndex(this.postIndex);
  }

  setSavePost() {
    this.postStateService.setSaved(true);
  }

  setUnsavePost() {
    this.postStateService.setUnsaved(true);
  }

  setUpvote() {
    this.postStateService.setUpVote(true);
  }
  setDownvote() {
    this.postStateService.setDownVote(true);
  }

  refreshPosts() {
    this.redditService.getRedditPosts().then((data) => {
      this.redditPosts = [];

      setTimeout(() => {
        console.log(data);
        this.redditPosts = data;
        this.postIndex = -1;
      }, 1000);
    });
  }
}
