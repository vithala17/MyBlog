import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  @Input() article: Article;
  @Output() articleSelected = new EventEmitter<Article>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(event){
    this.articleSelected.emit();
    console.log(event);
  }
}
