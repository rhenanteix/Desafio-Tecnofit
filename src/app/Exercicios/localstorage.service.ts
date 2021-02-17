import { Injectable } from '@angular/core';
import { PadraoExModule } from './padraoex.module'
import { map, max } from 'rxjs/operators'
import { Exercicio } from './Exercicio';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService extends PadraoExModule {

  constructor() { 
    super();
    console.log("Teste aqui");
    this.carregar()
  }

  listaEx() : Exercicio[] {
    let exs = JSON.parse(localStorage.getItem('exs'));
    //localStorage.clear();
    return exs;
  }

  AddPessoa(novaPessoa) {

    let ex = JSON.parse(localStorage.getItem('exs'));
    ex.push(novaPessoa);
    localStorage.setItem('exs', JSON.stringify(ex));
  }

  AtualizarPessoa(PessoaAntigo , attPessoa) { let exs = JSON.parse(localStorage.getItem('exs'));

  for(let i = 0; i < exs.length; i++) {
    if(exs[i].id == PessoaAntigo.id) {
      exs[i] = attPessoa;
    }
  }

  localStorage.setItem('exs', JSON.stringify(exs));
  console.log(exs);
  }

  RemoverPessoa(id) {
    let ex = JSON.parse(localStorage.getItem('exs'));
    for(let i = 0; i < ex.length; i++) {
     if(ex[i].id == id) {
       ex.splice(i, 1);
     }
  }
     localStorage.setItem('exs', JSON.stringify(ex));
  }

}

