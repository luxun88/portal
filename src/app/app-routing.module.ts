import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: ArticleListComponent},
    {path: 'article-list/:article-id', component: ArticleDetailComponent},
    {path: 'category/:category-id', component: CategoryComponent}
];
