import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PostStateService {
  constructor() {}

  public postIndex = new BehaviorSubject<number>(0);
  postIndexObservable = this.postIndex.asObservable();

  changePostIndex(index: number) {
    this.postIndex.next(index);
  }
}
