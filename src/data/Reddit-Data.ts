export class RedditData{
    username:string;
    subreddit:string;
    video:boolean;
    thumbnail:string;
    upvotes:number;
    downvotes:number;
    title:string;


    constructor(objectModel:{}) {

        if(!this.video) {
            // @ts-ignore
            this.username = objectModel['author_fullname'];
            // @ts-ignore
            this.subreddit = objectModel['subreddit'];
            // @ts-ignore
            this.thumbnail = objectModel['thumbnail'];
            // @ts-ignore
            this.upvotes = objectModel['ups'];
            // @ts-ignore
            this.downvotes = objectModel['downs'];
            // @ts-ignore
            this.title = objectModel['title'];
        }
    }
}
