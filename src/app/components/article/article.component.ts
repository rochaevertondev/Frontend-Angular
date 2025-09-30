import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  articles = [
    {
      title: 'Angular Standalone Components',
      content: [
        'Standalone components permitem criar apps sem NgModule.',
        'Isso simplifica a arquitetura e facilita o uso de imports.'
      ],
      expanded: false
    },
    {
      title: 'O que é CommonModule?',
      content: [
        'CommonModule fornece diretivas como *ngIf e *ngFor.',
        'Também inclui pipes básicos como date, uppercase, currency.'
      ],
      expanded: false
    },
    {
      title: 'RouterModule',
      content: [
        'Permite navegação entre páginas com RouterOutlet.',
        'Configura rotas principais com forRoot() e rotas filhas com forChild().'
      ],
      expanded: false
    }
  ];

  toggleArticle(index: number) {
    this.articles[index].expanded = !this.articles[index].expanded;
  }
}
