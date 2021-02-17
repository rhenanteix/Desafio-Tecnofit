import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/Exercicios/localstorage.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeExercicioComponent implements OnInit {

  exs;
  constructor(private storage : LocalstorageService) { }

  ngOnInit(): void {
    this.exs = this.storage.listaEx()
    console.log(this.exs)
  }


  deletarPessoa(id) {
    if(window.confirm("Você tem certeza que quer excluir?"))
    {
    for(let i = 0; i < this.exs.length; i++)
    {
      if(this.exs[i].id == id) {
        this.exs.splice(i, 1)
      }
    }
    }

    this.storage.RemoverPessoa(id);
  }

}
