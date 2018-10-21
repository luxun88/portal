import { Component, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ArticleEntity } from "../entity/article.entity";

@Component({
    selector: 'luxun-article',
    templateUrl: './article.component.html',
})
export class ArticleComponent {
    @Input() protected info: ArticleEntity;

    constructor(private router: Router, 
        private route: ActivatedRoute) {        
    }


    public goToArticle(id: number): void {
        this.router.navigate(['/article-list/', id], {relativeTo: this.route});
    }
}
