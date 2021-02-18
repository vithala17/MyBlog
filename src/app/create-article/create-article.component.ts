import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  
  articleDetails : FormGroup;
  article : Article;
  
  constructor() { }
  
  ngOnInit(): void {
    this.articleDetails = new FormGroup({
      "title" : new FormControl(null),
      "tags" : new FormControl(null),
      "editor" : new FormControl(null),      
    });
      //({"editor":new FormControl(null)}));
}

  onSubmit(){
    this.article.title = this.articleDetails.get("title").value;
    this.article.tags = this.articleDetails.get("tags").value;
    this.article.content = this.articleDetails.get("editor").value;
    this.article.date = Date.now.toString();
    console.log(this.articleDetails);
  }

  onClear(){
    this.articleDetails.get("editor").reset();
  }
}
