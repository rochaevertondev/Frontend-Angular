import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  pessoa: Pessoa;

  constructor() {
    this.pessoa = new Pessoa('Everton', 30);
  }

  getPessoa(): Pessoa {
    return this.pessoa;
  }

  setPessoa(nome: string, idade: number) {
    this.pessoa = new Pessoa(nome, idade);
  }
}
