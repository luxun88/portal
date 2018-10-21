import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { childRoutes } from './article-list/article-list.routing';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

export const routes: Routes = [
    {path: '', redirectTo: '/article-list', pathMatch: 'full'},
    {path: 'article-list', component: ArticleListComponent},
    {path: 'article-list/:id', component: ArticleDetailComponent}
];
