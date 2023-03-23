export class RedditData{
    username:string;
    subreddit:string;
    video:boolean;
    thumbnail:string;
    upvotes:number;
    downvotes:number;
    title:string;


    constructor(objectModel:{}) {

            // @ts-ignore
            this.username = objectModel['data']['author'];
            // @ts-ignore
            this.subreddit = objectModel['data']['subreddit_name_prefixed'];
            // @ts-ignore
            this.thumbnail = objectModel['data']['thumbnail'];
            // @ts-ignore
            this.upvotes = objectModel['data']['ups'];
            // @ts-ignore
            this.downvotes = objectModel['data']['downs'];
            // @ts-ignore
            this.title = objectModel['data']['title'];

    }
}
