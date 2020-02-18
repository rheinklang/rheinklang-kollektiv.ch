import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleGQLEntry } from '../../queries/ArticleById.query';
import { ArticlesService } from '../../services/articles.service';
import { Subscription } from 'rxjs';
import { unsubscribe } from '../../utils/subscription';
import { switchMap } from 'rxjs/operators';

@Component({
	selector: 'rk-articles',
	templateUrl: './articles.component.html',
	styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {
	public article: ArticleGQLEntry;
	public loaded = false;
	public articleId: string | null = null;

	private routeSub$: Subscription;
	private articleSub$: Subscription;

	constructor(private route: ActivatedRoute, private articlesService: ArticlesService) {}

	public ngOnInit() {
		this.routeSub$ = this.route.paramMap.subscribe(params => {
			const articleId = params.get('articleId');

			if (articleId) {
				this.articleId = articleId;
				this.fetchCorrespondingArticle(articleId);
			}
		});
	}

	public ngOnDestroy() {
		unsubscribe([this.routeSub$, this.articleSub$]);
	}

	private fetchCorrespondingArticle(id: string) {
		this.articleSub$ = this.articlesService.getArticleById(id).subscribe(article => {
			this.article = article;
			this.loaded = true;
		});
	}
}
