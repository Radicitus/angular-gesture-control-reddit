import { Injectable } from '@angular/core';
import {lastValueFrom} from "rxjs";
import * as https from "https";
import {HttpClient} from "@angular/common/http";
import {RedditData} from "../../data/Reddit-Data";


@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }
  public sendRequestToExpress(): Promise<any> {
    return lastValueFrom(this.http.get("https://www.reddit.com/r/all/top/.json")).then(
        (resp) => {
            console.log("APIServe: RESP: ", resp);
          return resp;
        },
        (err) => {
            console.log("APIServe: Err: ", err);
            return err;
        }
    );
  }

    getRedditPost(): Promise<RedditData> {
        //This line is sending a request to express, which returns a promise with some data. We're then parsing the data
        return this.sendRequestToExpress().then((data) => {
            return new RedditData(data);
        });
    }
}
