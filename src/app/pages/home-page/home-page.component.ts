import { Component, OnInit } from "@angular/core";
import { PredictionEvent } from "../../prediction-event";
import { RedditService } from "../../services/reddit.service";
import { RedditData } from "../../data/Reddit-Data";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  gesture: String = "";

  redditPosts: RedditData[];

  constructor(private redditService: RedditService) {
    this.redditService.getRedditPosts().then((data) => {
      console.log(data);
      this.redditPosts = data;
    });
  }

  ngOnInit(): void {}

  prediction(event: PredictionEvent) {
    this.gesture = event.getPrediction();
  }
}
