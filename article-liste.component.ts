import { Component } from '@angular/core';
import { AddArticleComponent } from '../add-article/add-article.component';
import { Article } from '../model/article';
@Component({
  selector: 'app-article-liste',
  standalone: true,
  imports: [AddArticleComponent],
  templateUrl: './article-liste.component.html',
  styleUrl: './article-liste.component.css'
})
export class ArticleListeComponent {
  title="liste des Articles:";
  Articles = [
    new Article("aaa","ph1", new Date("12/05/2012"),"abhjvhj",0),
    new Article("bbb","ph2", new Date("25/11/2021"), "bhuv",0),
    new Article( "ccc","ph3", new Date("19/09/2019"), "hioh",0),
  
];
action="";
changeAction(action: string){
  this.action=action;
}
addArticle(article:Article){
  this.Articles=[...this.Articles,article];
  this.changeAction("");
}
voteUp(article: Article) {
  article.score += 1; 
}

voteDown(article: Article) {
  if (article.score > 0) {
    article.score -= 1; 
}

}
}
