import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { QuillModule } from 'ngx-quill';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TexteditorComponent } from './texteditor/texteditor.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { ArticleItemComponent } from './article-item/article-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateArticleComponent,
    ArticleDetailComponent,
    TexteditorComponent,
    AllArticlesComponent,
    AboutAuthorComponent,
    ArticleItemComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
