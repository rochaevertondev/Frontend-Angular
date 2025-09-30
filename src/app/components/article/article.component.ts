import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0px',
        opacity: 0,
        padding: '0 0',
        overflow: 'hidden'
      })),
      state('expanded', style({
        height: '*',
        opacity: 1,
        padding: '*'
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
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
      title: 'CommonModule',
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
    },
    {
      title: 'Angular Animations',
      content: [
        'Angular oferece um módulo de animações integrado baseado em Web Animations API.',
        'É possível criar efeitos como fade, expandir/recolher, transições de rota e muito mais.',
        'As animações são declaradas com triggers, states e transitions dentro dos componentes.'
      ],
      expanded: false
    }
  ];

  toggleArticle(index: number) {
    this.articles[index].expanded = !this.articles[index].expanded;
  }
}
