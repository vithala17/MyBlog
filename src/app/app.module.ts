import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { CreateArticleComponent } from './create-article/create-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllArticlesComponent,
    ArticleItemComponent,
    ArticleDetailComponent,
    AboutAuthorComponent,
    CreateArticleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
