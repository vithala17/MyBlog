import { Article } from "../models/article.model";

export class articleLoader{
    private articleList : Article[] = [
        new Article('article1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis.', null, "1/17/2021"),
        new Article('article2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue.', null, "12/6/2020"),
        new Article('article3', 'Vestibulum non justo sed erat elementum lacinia vel ullamcorper libero. onsectetur adipiscing elit. dolorem ipsum quia dolor sit amet, Lorem ipsum dolor sit amet', null, "5/22/2020"),
        new Article('article4', 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...', null, "10/1/2019")
      ]

      getArticles(){
          return this.articleList.slice;
      }
}