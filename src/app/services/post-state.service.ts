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

  public save = new BehaviorSubject<boolean>(false);
  setSavedObservable = this.save.asObservable();

  setSaved(bool: boolean) {
    this.save.next(bool);
  }

  public unsave = new BehaviorSubject<boolean>(false);
  setUnsavedObservable = this.unsave.asObservable();

  setUnsaved(bool: boolean) {
    this.unsave.next(bool);
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
