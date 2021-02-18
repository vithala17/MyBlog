export class Article{
    public title: string;
    public content: string;
    public tags: string[];
    public date : string;

    /**
     *
     */
    constructor(title:string, content:string, tags: string[], date: string) {
            this.title = title;
            this.content = content;
            this.tags = tags;
            this.date = date;
    }
}