import { Component, OnInit } from "@angular/core";
import { ArticleEntity } from "../entity/article.entity";
import { ArticleAgentService } from "../service/article-agent.service";
import { Location } from "@angular/common";

@Component({
    selector: 'article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.css']
  })
  export class ArticleListComponent implements OnInit{
    private articles: ArticleEntity[];

    constructor(private location: Location,
      private agent: ArticleAgentService) {
      }
      
      public ngOnInit(): void {
        let currentPath = this.location.path();
        let matchResult: RegExpMatchArray = currentPath.match('/category/(\\d{0,})');
        if(matchResult != null ) {
          let categoryId = parseInt(matchResult['1']);
          this.articles = this.agent.getArticlesByCategory(categoryId);
        } else {
          this.articles = this.agent.getAllArticles();
        }
        
    }
  }
