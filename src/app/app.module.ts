import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { LuxunFooterComponent } from './framework/luxun-footer/luxun-footer.component';
import { LuxunHeaderComponent } from './framework/luxun-header/luxun-header.component';
import { LuxunMainContainerComponent } from './framework/luxun-main-container/luxun-main-container.component';
import { LuxunMainAsideComponent } from './framework/luxun-main-aside/luxun-main-aside.component';
import { LuxunMainMenuComponent } from './framework/luxun-main-menu/luxun-main-menu.component';
import { LuxunMainSectionComponent } from './framework/luxun-main-section/luxun-main-section.component';
import { ArticleAgentService } from './service/article-agent.service';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleDetailComponent,
    ArticleComponent,
    ArticleListComponent,
    LuxunFooterComponent,
    LuxunHeaderComponent,
    LuxunMainContainerComponent,
    LuxunMainAsideComponent,
    LuxunMainMenuComponent,
    LuxunMainSectionComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ArticleAgentService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
