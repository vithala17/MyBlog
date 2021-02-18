import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CreateArticleComponent } from './create-article/create-article.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'home',component: AllArticlesComponent},
    {path:'recent',component: AllArticlesComponent},
    {path:'write',component: CreateArticleComponent},
    {path:'about',component: AboutAuthorComponent},
    {path:'detail/:title', component: ArticleDetailComponent},
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'**', redirectTo: 'home', pathMatch: 'full'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
