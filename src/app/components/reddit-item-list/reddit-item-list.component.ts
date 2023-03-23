import { Component, Input } from "@angular/core";

@Component({
  selector: "app-reddit-item-list",
  templateUrl: "./reddit-item-list.component.html",
  styleUrls: ["./reddit-item-list.component.css"],
})
export class RedditItemListComponent {
  @Input() posts: String[];

  constructor() {}
}
