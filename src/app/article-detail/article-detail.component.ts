import { Component, Input, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ArticleAgentService } from "../service/article-agent.service";
import { ArticleEntity } from "../entity/article.entity";

@Component({
    selector: 'luxun-article-detail',
    templateUrl: './article-detail.component.html',
})
export class ArticleDetailComponent implements OnInit {
    private testCode = `
    public void testArraysAsList()
    {
        List<String> numbers = Arrays.asList("1", "2");
        List<String> anotherNumbers = Arrays.asList("3");
        numbers.addAll(anotherNumbers);
        assertEquals(Arrays.asList("1", "2", "3"), numbers);
    }`;

    private testCode1 = `
    import java.util.ArrayList;
    import java.util.Arrays;
    import java.util.Collections;
    import java.util.List;
    public void testArraysAsList()
    {
        List<String> numbers = new ArrayList<>();
        numbers.addAll(Arrays.asList("1", "2"));// or Collections.addAll(numbers, "1", "2");
        List<String> anotherNumbers = Arrays.asList("3");
        numbers.addAll(anotherNumbers);
        assertEquals(Arrays.asList("1", "2", "3"), numbers);
    }
    `;

    private code = `
    public static <T> List<T> asList(T... a) {
        return new ArrayList<>(a);
    }
    
    private static class ArrayList<E> extends AbstractList<E>
    implements RandomAccess, java.io.Serializable{
        ......
    }
    `;

    private addCode = `
    public void add(int index, E element) {
        throw new UnsupportedOperationException();
    }
    `;
 
    private info: ArticleEntity;

    constructor(
        private agent: ArticleAgentService,
        private router: Router, 
        private activatedRoute: ActivatedRoute) {        
    }


    public ngOnInit(): void {
        this.info = this.agent.getArticles(this.parseArticleId());
        console.info(this.info.content)
    }

    private parseArticleId(): number {
        let id = 0;
        this.activatedRoute.params.subscribe(params => {
            id = params['id']
        });
        return id;
    }
}
