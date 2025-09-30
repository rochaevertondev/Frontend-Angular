import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = [
    {
      title: 'Angular Standalone Components',
      content: [
        'Standalone components permitem criar apps sem NgModule.',
        'Isso simplifica a arquitetura e facilita o uso de imports.'
      ]
    },
    {
      title: 'O que é CommonModule?',
      content: [
        'CommonModule fornece diretivas como *ngIf e *ngFor.',
        'Também inclui pipes básicos como date, uppercase, currency.'
      ]
    },
    {
      title: 'RouterModule',
      content: [
        'Permite navegação entre páginas com RouterOutlet.',
        'Configura rotas principais com forRoot() e rotas filhas com forChild().'
      ]
    },
    {
      title: 'Angular Animations',
      content: [
        'Angular oferece um módulo de animações integrado baseado em Web Animations API.',
        'É possível criar efeitos como fade, expandir/recolher, transições de rota e muito mais.',
        'As animações são declaradas com triggers, states e transitions dentro dos componentes.'
      ]
    }
  ];

  getArticles(): Article[] {
    return this.articles;
  }
}
