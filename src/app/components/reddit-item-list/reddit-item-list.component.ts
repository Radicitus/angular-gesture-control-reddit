import { Component, Input } from "@angular/core";
import { RedditData } from "../../data/Reddit-Data";

@Component({
  selector: "app-reddit-item-list",
  templateUrl: "./reddit-item-list.component.html",
  styleUrls: ["./reddit-item-list.component.css"],
})
export class RedditItemListComponent {
  @Input() posts: RedditData[];

  constructor() {}
}
