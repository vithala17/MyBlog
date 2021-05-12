import { Component } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  loadedFeature : string;
  selectedArticle : Article;


  onNavigate(feature : string){
    this.loadedFeature = feature;
  }
}
