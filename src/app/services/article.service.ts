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
      title: 'Angular Animations',
      content: [
        'Angular oferece um módulo de animações integrado baseado em Web Animations API.',
        'É possível criar efeitos como fade, expandir/recolher, transições de rota e muito mais.',
        'As animações são declaradas com triggers, states e transitions dentro dos componentes.'
      ]
    },
    {
      title: 'CommonModule',
      content: [
        'CommonModule fornece diretivas como *ngIf e *ngFor. ',
        'Também inclui pipes básicos como date, uppercase, currency.',
        'Novo if e for do Angular 17+: O Angular introduziu novas sintaxes de flow control (@if, @for, @switch) que não precisam do CommonModule (ou de qualquer outro módulo) para funcionar, simplificando ainda mais o código.'
      ]
    },
    {
      title: 'RouterModule',
      content: [
        'Permite navegação entre páginas com RouterOutlet.',
        'Configura rotas principais com forRoot() e rotas filhas com forChild().',
        'No novo modelo do Angular 17+, o RouterModule é efetivamente dividido:',
        'Configuração Global: As funcionalidades que configuram o roteador (serviços e provedores) são injetadas globalmente na aplicação através do provideRouter(routes) no arquivo app.config.ts. Isso torna as rotas conhecidas em todo o aplicativo.',
        'Diretivas de Template: As funcionalidades que você usa no HTML, como <router-outlet> e routerLink, são diretivas que agora você importa individualmente.'
      ]
    }
  ];

  getArticles(): Article[] {
    return this.articles;
  }
}
