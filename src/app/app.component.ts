import { Component } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  loadedFeature : string;
  selectedArticle : Article;
  
  constructor() { }

  onNavigate(feature : string){
    this.loadedFeature = feature;
  }

}