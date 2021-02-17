import { Injectable } from '@angular/core';
import { PadraoModule } from './padrao.module'
import { map, max } from 'rxjs/operators'
import { Pessoa } from './Pessoa';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService extends PadraoModule {

  constructor() { 
    super();
    console.log("Teste ok");
    this.carregar()
  }

  listaPessoas() : Pessoa[] {
    let pessoas = JSON.parse(localStorage.getItem('pessoas'));
    //localStorage.clear();
    return pessoas;
  }

  AddPessoa(novaPessoa) {

    let pessoa = JSON.parse(localStorage.getItem('pessoas'));
    pessoa.push(novaPessoa);
    localStorage.setItem('pessoas', JSON.stringify(pessoa));
  }

  AtualizarPessoa(PessoaAntigo , attPessoa) { let pessoas = JSON.parse(localStorage.getItem('pessoas'));

  for(let i = 0; i < pessoas.length; i++) {
    if(pessoas[i].id == PessoaAntigo.id) {
      pessoas[i] = attPessoa;
    }
  }

  localStorage.setItem('pessoas', JSON.stringify(pessoas));
  console.log(pessoas);
  }

  RemoverPessoa(id) {
    let pessoa = JSON.parse(localStorage.getItem('pessoas'));
    for(let i = 0; i < pessoa.length; i++) {
     if(pessoa[i].id == id) {
       pessoa.splice(i, 1);
     }
  }
     localStorage.setItem('pessoas', JSON.stringify(pessoa));
  }

}

