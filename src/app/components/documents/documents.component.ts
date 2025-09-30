import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-documents',
  imports: [CommonModule, ArticleComponent],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss'
})
export class DocumentsComponent {

}
