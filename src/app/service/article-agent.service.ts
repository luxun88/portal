import { ArticleEntity } from "../entity/article.entity";
import { ARTICLES } from "../data/articles.data";

export class ArticleAgentService {
    public getAllArticles(): ArticleEntity[] {
        return ARTICLES;
    }

    public getArticles(articleId: number): ArticleEntity {
        return ARTICLES.find(e => e.id === articleId);
    }

    public getArticlesByCategory(categoryId: number): ArticleEntity[] {
        return ARTICLES.filter(e => e.categoryId == categoryId);
    }
}