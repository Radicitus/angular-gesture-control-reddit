import { Component, OnInit } from '@angular/core';
import { PredictionEvent } from '../prediction-event';
import {RedditService} from "../services/reddit.service";
import {RedditData} from "../../data/Reddit-Data";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  gesture: String = "";
  constructor(private redditService: RedditService) {
    this.redditService.sendRequestToExpress().then(r => console.log("function runs"));
    this.redditService.getRedditPost().then(data => {
      console.log("HOMEPAGE: ", data);
    });
  }

  ngOnInit(): void {
  }

  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
  }

}
