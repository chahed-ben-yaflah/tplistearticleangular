import { Component,EventEmitter,Input, Output  } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  
    @Input() lastId?:number;
    @Output() articleCreated = new EventEmitter<Article>();
    addArticle(id:number,title:String,photo:string,date:Date,description:String,score:number){
    const newArticle=new Article(this.lastId! +1,
      title,
      photo,
      date,
      description,
      score,
    )
  
    
    this.articleCreated.emit(newArticle);
    console.log(newArticle);
  };
}


