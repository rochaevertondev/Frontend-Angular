import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  pessoaNome = '';
  pessoaIdade = 0;
  meuBoolean: boolean = false;

  constructor(private pessoaService: PessoaService) {
    const pessoa = this.pessoaService.getPessoa();
    this.pessoaNome = pessoa.nome;
    this.pessoaIdade = pessoa.idade;
  }
  
  atualizaBoolean(valor: boolean){
    this.meuBoolean = valor;
  }
}
