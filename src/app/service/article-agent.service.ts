import { ArticleEntity } from "../entity/article.entity";

export class ArticleAgentService {
    private articles: ArticleEntity[];

    constructor() {
      this.articles = [
        {
          id: 1,
          title: 'JDK中java.util.Arrays.asList()返回的List使用陷阱,返回的List add方法不可用。',
          postedTime: '2018-09-08 22:12:28',
          content: `
          <article>
                    <header id="main-header">
                        <hgroup>
                            <h1>JDK中java.util.Arrays.asList()返回的List使用陷阱,返回的List add方法不可用。</h1>
                        </hgroup>
                        <cite><time datetime="2018-09-07" pubdate>2018年09月08日 22:12:28</time></cite>
                    </header>
                    <h2>1.测试代码</h2>
                    <p>
                        <div class="javacode">
                            <pre>
                            public void testArraysAsList()
                            {
                                List<String> numbers = Arrays.asList("1", "2");
                                List<String> anotherNumbers = Arrays.asList("3");
                                numbers.addAll(anotherNumbers);
                                assertEquals(Arrays.asList("1", "2", "3"), numbers);
                            }
                        </pre>
                        </div>
                        <div class="javaexception">
                        <pre>
                        java.lang.UnsupportedOperationException
	                    at java.util.AbstractList.add(Unknown Source)
	at java.util.AbstractList.add(Unknown Source)
    at java.util.AbstractCollection.addAll(Unknown Source)
</pre>
</div>
<div>
    原因在于代码实现的时候，Arrays自己定义的内部使用的ArrayList没有复写java.util.AbstractList的add方法。
    java.util.Arrays.asList方法的代码实现片段：
    <pre>
    public static <T> List<T> asList(T... a) {
            return new ArrayList<>(a);
        }
    
        /**
         * @serial include
         */
        private static class ArrayList<E> extends AbstractList<E>
            implements RandomAccess, java.io.Serializable
        </pre> 
            java.util.AbstractList的add方法的代码实现片段：
            <pre>
            public void add(int index, E element) {
                throw new UnsupportedOperationException();
            }
        </pre>
<h2>解决方法</h2>
先new一个java.util.ArrayList对象，而后进行addAll操作，即可成功。这里addAll有两种形式。
形式1：numbers.addAll(Arrays.asList("1", "2"));
形式2：Collections.addAll(numbers, "1", "2");
<div class="javacode">
    <pre>
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
</pre>
</div>

                    </p>


                </article>
          `
        },
        {
          id: 2,
          title: '(转)Building Java Projects with Maven',
          postedTime: '2018-09-20 22:26:22',
          content: `
          <article>
            <header id="main-header">
                <hgroup>
                    <h1>(转)Building Java Projects with Maven</h1>
                </hgroup>
                <cite><time datetime="2018-09-07" pubdate>2018年09月20日 22:26:22</time></cite>
            </header>
            <br/>
            原文链接：<a href="https://spring.io/guides/gs/maven/#scratch" target="_blank">https://spring.io/guides/gs/maven/#scratch</a>
        </article>
          `
        }
      ];    
    }

    public getArticles(id: number): ArticleEntity {
        return this.articles.find(e => e.id == id);
    }
}