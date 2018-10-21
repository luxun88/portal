import { Routes } from '@angular/router';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';

export const childRoutes: Routes = [
    // {path: '', redirectTo: '/article-list', pathMatch: 'full'},
    {path: ':id', component: ArticleDetailComponent}
];
