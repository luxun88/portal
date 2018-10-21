import { Component } from "@angular/core";
import { ArticleEntity } from "../entity/article.entity";

@Component({
    selector: 'article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.css']
  })
  export class ArticleListComponent {
    private articles: ArticleEntity[];

    constructor() {
      this.articles = [
        {
          id: 1,
          title: 'JDK中java.util.Arrays.asList()返回的List使用陷阱,返回的List add方法不可用。',
          postedTime: '2018-09-08 22:12:28',
          content: ``
        },
        {
          id: 2,
          title: '(转)Building Java Projects with Maven',
          postedTime: '2018-09-20 22:26:22',
          content: ''
        }
      ];    
    }
  }
