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

  public setSaved = new BehaviorSubject<number>(0);
  setSavedObservable = this.setSaved.asObservable();

  updateSaveState(saveState: number) {
    this.setSaved.next(saveState);
  }

  public upVote = new BehaviorSubject<boolean>(false);
  upVoteObservable = this.upVote.asObservable();

  setUpVote(bool: boolean) {
    this.upVote.next(bool);
  }

  public downVote = new BehaviorSubject<boolean>(false);
  downVoteObservable = this.downVote.asObservable();

  setDownVote(bool: boolean) {
    this.downVote.next(bool);
  }
}
